export const meta = {
  title: "404 Not Found",
};

export default function NotFoundPage({ meta, pages }) {
  return (
    <main class="w-screen h-screen flex flex-col justify-center items-center">
      <h3 class="not-found font-bold text-blue dark:text-lightBlue">Not Found</h3>
      <p>You've found a page that no longer exists</p>
    </main>
  );
}
