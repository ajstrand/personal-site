import 'solid-devtools'
import './index.css'
import { hydrate } from 'solid-js/web'
//import App from './App'
import Counter from './islands/Counter.client'

hydrate(() => <Counter />, document.getElementById('root'))
