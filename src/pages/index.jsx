import Counter from "../islands/Counter.client.jsx";
import Island from "../Island.jsx";

function Index() {
  return (
    <div>
      <Island componentName="Counter" islandTag="span">
        <Counter />
      </Island>
      {/* <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div> */}
    </div>
  );
}

export default Index;
