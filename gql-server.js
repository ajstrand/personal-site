import { createSchema, createYoga } from 'graphql-yoga';
import { GraphQLError } from 'graphql';
import fs from 'node:fs/promises';
import { assertFound } from './src/server/logging.js';

const testSchema = await fs.readFile(new URL('./testSchema.graphql', import.meta.url), 'utf8');
const postsFileUrl = new URL('./src/data/posts.json', import.meta.url);

const resolvers = {
    Query: {
        posts: async () => {
            let raw;
            try {
                raw = await fs.readFile(postsFileUrl, 'utf-8');
            } catch (err) {
                if (err.code === 'ENOENT') {
                    assertFound(null, 'No posts file found', { route: 'getting posts from graphql' });
                }
                throw err;
            }

            let parsedData;
            try {
                parsedData = JSON.parse(raw);
            } catch (err) {
                throw new GraphQLError('Invalid JSON in posts.json', { originalError: err });
            }

            const posts = Array.isArray(parsedData) ? parsedData : parsedData?.posts;
            assertFound(posts, 'No posts found in file', { route: 'getting posts from graphql' });

            return posts;
        },
    },
};

export const schema = createSchema({
    typeDefs: testSchema,
    resolvers,
});

export const yoga = createYoga({
    schema,
    graphqlEndpoint: '/graphql',
    maskedErrors: false,
});
