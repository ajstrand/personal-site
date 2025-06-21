import { HttpResponse, graphql, http } from 'msw'

const users = [
  {
    id: 1,
        name: 'alice',
    hobbies: ["skiing", "surfing"],
  },
  {
    id:2,
    name:"bob",
    hobbies:["gardening", "reading"]
  }
]

export const restHandlers = [
  http.get('https://rest-endpoint.example/path/to/posts', () => {
    return HttpResponse.json(users)
  }),
]

export const graphqlHandlers = [
  graphql.query('ListUsers', () => {
    return HttpResponse.json(
      {
        data: { users },
      },
    )
  }),
]


