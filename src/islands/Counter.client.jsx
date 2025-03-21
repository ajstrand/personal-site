import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      the count is {count()}
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        increment
      </button>
    </div>
  );
}

export default Counter;
