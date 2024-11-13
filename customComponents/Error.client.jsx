import { ErrorBoundary } from "react-error-boundary";
//import Main from "./Main.res.mjs";

const ZX = ({ item }) => {
  return <p>{item.toUpperCase()}</p>;
};

const Foo = () => {
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <ZX></ZX>
  </ErrorBoundary>;
};

export default Foo;
