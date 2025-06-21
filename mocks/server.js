import { setupServer } from 'msw/node'
import { restHandlers, graphqlHandlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...restHandlers, ...graphqlHandlers)