import { fetchServerData } from '../graphql/serverGraphql.js';
import { assertFound } from '../server/logging.js';

const GET_POSTS_QUERY = `
    query Posts {
      posts {
        id
        title
      }
    }
`;

export async function loader({ fetch }) {
    const data = await fetchServerData({
        fetch,
        query: GET_POSTS_QUERY,
        route: 'loading posts',
    });

    assertFound(data.posts, 'No posts found', { route: 'loading posts' });

    return {
        generatedAt: new Date().toISOString(),
        posts: data.posts,
    };
}