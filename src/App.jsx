import './App.css'
import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="App">

      <h1>Vite + Solid</h1>
      <div class="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>

      </div>

    </div>
  )
}

export default App
