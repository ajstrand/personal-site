// import "preact/debug"
import { hydrateIslands } from './clientHydrate.jsx'
import ExampleComponent from './components/ExampleComponent.jsx'

function Providers({ children }) {
  return <div>{children}</div>
}

console.log('hydrating...')
hydrateIslands({ ExampleComponent }, Providers)
console.log('hydrated!')
