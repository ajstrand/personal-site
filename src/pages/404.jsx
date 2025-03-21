export const meta = {
  title: "404 Not Found",
};

export default function NotFoundPage({ meta }) {
  return (
    <main class="w-screen h-screen flex flex-col justify-center items-center">
      <h3 class="not-found font-bold text-blue dark:text-lightBlue">
        Sorry, we could not find the page requested
      </h3>
      <p>You've found a page that does not exist</p>
    </main>
  );
}
