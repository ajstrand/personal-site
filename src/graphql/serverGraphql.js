import { logServerError, assertFound, logServerSuccess } from '../server/logging.js';

export async function fetchServerData({ fetch, query, variables = {}, route = 'graphql-request' }) {
    const res = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
        const error = new Error(`GraphQL HTTP error: ${res.status}`);
        logServerError(error, { route, status: res.status });
        throw error;
    }

    const { data, errors } = await res.json();

    if (errors?.length) {
        const message = errors.map((e) => e.message).join(', ');
        const error = new Error(`GraphQL query failed: ${message}`);
        logServerError(error, { route, status: 500 });
        throw error;
    }

    assertFound(data, 'No data returned from GraphQL response', { route });

    logServerSuccess('GraphQL query executed successfully', { route });

    return data;
}