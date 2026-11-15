import { useState, useEffect } from "preact/hooks";
import CodeDemo from "../components/CodeDemo";

import exampleLoader from '../loaders/example.loader.js';
import { useLoaderData } from '../hooks/useLoaderData.js';





// const LoaderDemo = () => {
//   const loaderData = useLoaderData(exampleLoader);
//   return (
//     <div>
//       <h1>Posts</h1>
//       <p>Generated at: {loaderData.generatedAt}</p>

//       <ul>{loaderData?.posts?.map(post => (
//         <li key={post.id}>{post.title}</li>
//       ))}</ul>
//     </div>
//   );
// }


const Example = (props) => {
  const [textIsShowing, setAnimation] = useState(false);
  const [isMounted, setMounted] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => setMounted(true), []);
  if (isError) {
    return <CodeDemo error={true}><p>Error loading example</p></CodeDemo>;
  }
  return (
    <CodeDemo>

    </CodeDemo>
  );
};

export default Example;
