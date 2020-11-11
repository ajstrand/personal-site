const memoize = (fn) => {
  const cache = {};

  return (arg) => {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
};
export default memoize;
