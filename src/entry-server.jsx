import { render as renderToString } from "preact-render-to-string";
import { MDXProvider } from "@mdx-js/preact";
import { DefaultLayout } from "./layouts/DefaultLayout";
import ServerErrorFallback from "./components/ServerErrorFallback.jsx";

const getComponentAndMeta = (pageObject) => {
	let Component;
	let meta;
	if (pageObject === undefined) {
		console.warn("No data found for the requested URL, falling back to 404 page.");
		const errorPage = get404Page();
		Component = errorPage["/404/"]?.Component;
		meta = errorPage["/404/"]?.meta;
	}
	else {
		Component = pageObject?.Component;
		meta = pageObject?.meta;
	}

	return { Component, meta };
}

export function render(url) {

	const pages = getPages();
	if (pages === undefined || pages === null) {
		console.error("Error getting pages: no pages exist", pages);
		return { html: renderToString(<ServerErrorFallback />) };
	}
	const pageObject = pages[url];
	const { Component, meta } = getComponentAndMeta(pageObject);

	try {
		const html = renderToString(
			<MDXProvider>
				<DefaultLayout meta={meta}>
					<Component pages={pages} meta={meta} />
				</DefaultLayout>
			</MDXProvider>,
		);

		return { html };
	} catch (error) {
		console.error("Error rendering URL:", url, error);
		const errorObj = {
			error:error.toString(),
			url:url
		}
		const errorResponse = renderToString(<ServerErrorFallback error={errorObj} />);
		return { html: errorResponse };
	}



}

function get404Page() {
	const modules = import.meta.glob("./pages/404.jsx", { eager: true });

	if (modules.length === 0) {
		return new Error("no modules were found, check the extension of the file you requested");
	}
	return Object.entries(modules).reduce((pages, [modulePath, page]) => {

		// remove pages and jsx from module path 
		const filePath = modulePath
			.replace(/^\.\/pages/, "")
			.replace(/(\.jsx|\.mdx)$/, "");
		// create a url path that ends with a slash
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

function getPages() {
	const modules = import.meta.glob("./pages/**/*.{mdx,jsx}", { eager: true });

	if (modules.length === 0) {
		return new Error("no modules were found, check the server");
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
