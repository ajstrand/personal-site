import './App.css'
import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="App">

      <h1>Vite + Solid</h1>
      <div class="card">
        <p>the count is {count}</p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          increment
        </button>

      </div>

    </div>
  )
}

export default App
