const Index = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>alex's site</title>
      </head>

      <body>
        <p>this is a test</p>
        {/* body outlet */}
        <div id="root" />
        <script type="module" src="src/entry-client.jsx" />
      </body>
    </html>
  );
};

export default Index;
