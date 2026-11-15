import { createServer } from 'vite';
import { yoga } from './gql-server.js';

const loaderFetch = async (input, init) => {
    const url =
        typeof input === 'string'
            ? input
            : input instanceof URL
                ? input.href
                : input.url;

    if (url === '/graphql' || url.startsWith('http://localhost:3000/graphql')) {
        const request = new Request(new URL(url, 'http://localhost:3000'), init);
        return yoga.fetch(request);
    }

    return globalThis.fetch(input, init);
};

export function dataLoaderPlugin() {
    let devServer;
    let buildRunner;

    return {
        name: 'vite-plugin-data-loader',
        enforce: 'pre',

        configureServer(server) {
            devServer = server;
        },

        async buildStart() {
            if (!devServer) {
                buildRunner = await createServer({
                    server: { middlewareMode: true },
                    appType: 'custom',
                });
            }
        },

        async load(id) {
            if (id.includes('?run')) return null;
            const cleanId = id.split('?')[0];
            if (!/\.loader\.(js|ts)$/.test(cleanId)) return null;

            const runner = devServer || buildRunner;
            if (!runner) return null;

            const mod = await runner.ssrLoadModule(`${cleanId}?run`);

            if (typeof mod.loader !== 'function') {
                throw new Error(`File ${cleanId} must export a "loader" function.`);
            }

            const data = await mod.loader({ fetch: loaderFetch });

            return `export default ${JSON.stringify(data)};`;
        },

        async handleHotUpdate({ file, server }) {
            if (/\.loader\.(js|ts)$/.test(file)) {
                const mod = server.moduleGraph.getModuleById(file);
                if (mod) {
                    server.moduleGraph.invalidateModule(mod);
                    server.ws.send({ type: 'full-reload' });
                }
            }
        },

        async buildEnd() {
            if (buildRunner) {
                await buildRunner.close();
            }
        },
    };
}
