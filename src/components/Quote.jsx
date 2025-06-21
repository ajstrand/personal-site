import { useEffect } from "preact/hooks";
const Quote = () => {
	useEffect(() => {
		const fun = async () => {
			await new Promise((resolve) => setTimeout(resolve, 2000));
		};

		fun();
	});

	return (
		<blockquote>
			This message should load from the server after a 2 second delay and should
			not block the rest of the page from rendering.
		</blockquote>
	);
};

export default Quote;
