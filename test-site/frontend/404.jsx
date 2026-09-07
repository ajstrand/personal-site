export const meta = {
  title: "404 Not Found",
};

export default function NotFoundPage({ meta }) {
  return (
    <main class="not-found-main">
      <h3 class="not-found">
        {meta.title}
      </h3>
      <p>You've found a page that does not exist</p>
    </main>
  );
}
