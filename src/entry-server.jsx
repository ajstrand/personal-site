import { render as renderToString } from "preact-render-to-string";
import { MDXProvider } from "@mdx-js/preact";

import { DefaultLayout } from "./layouts/DefaultLayout";

export function render(url) {
	const data = getPages()
	const obj = data[url];
	let Component;
	let meta;
	if (obj === undefined) {
		Component = data["/404/"]?.Component
		meta = data["/404/"]?.meta
	}
	else {
		Component = obj?.Component;
		meta = obj?.meta;
	}


	const html = renderToString(
		<MDXProvider>
			<DefaultLayout meta={meta}>
				<Component meta={meta} />
			</DefaultLayout>
		</MDXProvider>,
	);

	return { html };
}

function getPages() {
	const modules = import.meta.glob("./pages/**/*.{mdx,jsx}", { eager: true });

	//const modules = import.meta.glob( "./pages/**/index.mdx", { eager: true });
	if (modules.length === 0) {
		return new Error("no modules");
	}
	return Object.entries(modules).reduce((pages, [modulePath, page]) => {
		const filePath = modulePath
			.replace(/^\.\/pages/, "")
			.replace(/(\.jsx|\.mdx)$/, "");
		const urlPath = filePath.endsWith("/index")
			? filePath.replace(/index$/, "")
			: `${filePath}/`;
		pages[urlPath] = {
			Component: page.default,
			meta: page.meta,
			tableOfContents: page.tableOfContents,
			filePath,
			modulePath,
			urlPath,
		};
		return pages;
	}, {});
}

function getIndexPage() {
	const modules = import.meta.glob("./pages/**/index.mdx", { eager: true });

	if (modules.length === 0) {
		return new Error("no modules");
	}
	return Object.entries(modules).reduce((pages, [modulePath, page]) => {
		const filePath = modulePath
			.replace(/^\.\/pages/, "")
			.replace(/(\.jsx|\.mdx)$/, "");
		const urlPath = filePath.endsWith("/index")
			? filePath.replace(/index$/, "")
			: `${filePath}/`;
		pages[urlPath] = {
			Component: page.default,
			meta: page.meta,
			tableOfContents: page.tableOfContents,
			filePath,
			modulePath,
			urlPath,
		};
		return pages;
	}, {});
}
