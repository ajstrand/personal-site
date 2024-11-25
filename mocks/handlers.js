import { graphql as executeGraphQL, buildSchema } from "graphql";
import { graphql, HttpResponse } from "msw";

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
  }
 
  type Query {
    posts: [Post!]
  }
`);

const testSchema = buildSchema(`
  type Query {
  answer: Float!
  }
  `);

const mockData = {
  answer: 5978,
};

// Represent the list of all posts in a Map.
const allPosts = new Map([
  [
    "e82f332c-a4e7-4463-b440-59bc91792634",
    {
      id: "e82f332c-a4e7-4463-b440-59bc91792634",
      title: "Introducing a new JavaScript runtime",
    },
  ],
  [
    "64734573-ce54-435b-8528-106ac03a0e11",
    {
      id: "64734573-ce54-435b-8528-106ac03a0e11",
      title: "Common software engineering patterns",
    },
  ],
  [
    "64734573-ce54-435b-8528-106ac03a0e12",
    {
      id: "64734573-ce54-435b-8528-106ac03a0e12",
      title: "mocking graphql",
    },
  ],
]);

export const handlers = [
  graphql.query("TestQuery", async ({ query, variables }) => {
    console.log(query);
    // return HttpResponse.json({
    //   data: {
    //     answer: mockData,
    //   },
    // });
    const { errors, data } = await executeGraphQL({
      testSchema,
      source: query,
      variableValues: variables,
      rootValue: {
        answer: mockData,
      },
    });

    return HttpResponse.json({ errors, data });
  }),
  graphql.query("ListPosts", async ({ query, variables }) => {
    const { errors, data } = await executeGraphQL({
      schema,
      source: query,
      variableValues: variables,
      rootValue: {
        posts: Array.from(allPosts.values()),
      },
    });

    return HttpResponse.json({ errors, data });
  }),
];
