import { Client, cacheExchange, fetchExchange, Provider } from "@urql/preact";

const client = new Client({
  url: "http://localhost:3000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export const MockedGraphQLProvider = ({ children }) => (
  <Provider value={client}>{children}</Provider>
);
