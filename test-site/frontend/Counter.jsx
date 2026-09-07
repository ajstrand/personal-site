import { useState } from 'preact/hooks';

export default function Counter({ initial_count }) {
  const [count, setCount] = useState(initial_count || 0);

  return (
    <div style={{ border: '2px solid coral', padding: '1rem', borderRadius: '8px' }}>
      <h3>Preact Island Interactivity</h3>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{ marginLeft: '8px' }} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
