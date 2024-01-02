//import './index.css'

import {counter as Counter} from "./comps/counter.mjs";

import hydrateIslands from "./clientHydrate.jsx";

const App = () => <h1>Hello World from preact!</h1>;


console.log('hydrating...')
hydrateIslands({ Counter })
console.log('hydrated!')