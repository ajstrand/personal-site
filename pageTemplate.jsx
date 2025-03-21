import { generateHydrationScript } from "solid-js/web";
const Index = ({ headScripts, bodyScripts }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>alex strand: digital garden</title>
        <link href="./index.css" rel="stylesheet" />
        {/* {generateHydrationScript()} */}
      </head>
      <body class="redBox">
        {/* <div id="root">{bodyScripts}</div> */}

        <script type="module" src="./src/entry-client.jsx"></script>
      </body>
    </html>
  );
};

export default Index;
