import { expect, test } from "vitest";
//import gql from 'graphql-tag';

const testBackendUrl = "https://api.example.com/graphql";

const userQuery = `
        query ListUsers {
          users {
            name
          }
        }
      `;

const testMethod = "POST";

const testHeaders = { "Content-Type": "application/json" };

test("example graphql mocking", async () => {
	const response = await fetch(testBackendUrl, {
		method: testMethod,
		headers: {
			testHeaders,
		},
		body: JSON.stringify({
			query: userQuery,
		}),
	});

  const {status, statusText} = response;

  const resJson = await response.json();

  const expectedResponseData = {
		data: {
			users: [
				{
					name: "alice",
					id:1,
          hobbies:["skiing", "surfing"]
				},
				{
					name: "bob",
					id:2,
          hobbies:["gardening", "reading"]
				}
			],
		},
	}

	expect(status).toBe(200);
	expect(statusText).toBe("OK");

	expect(resJson).toEqual(expectedResponseData);
});
