/**
 * Executes a GraphQL query or mutation from the browser.
 */
export async function fetchGraphqlBrowser({
    query,
    variables = {},
    route = 'browser-graphql-request',
    signal,
    customFetch = globalThis.fetch,
}) {
    const res = await customFetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
        signal,
    });

    if (!res.ok) {
        const error = new Error(`GraphQL HTTP error: ${res.status}`);
        console.error(`[${route}] HTTP ${res.status}:`, error);
        throw error;
    }

    const { data, errors } = await res.json();

    if (errors?.length) {
        const message = errors.map((e) => e.message).join(', ');
        const error = new Error(`GraphQL query failed: ${message}`);
        console.error(`[${route}] GraphQL errors:`, errors);
        throw error;
    }

    if (data === null || data === undefined) {
        const error = new Error('No data returned from GraphQL response');
        console.warn(`[${route}] Missing data:`, error);
        throw error;
    }

    return data;
}
