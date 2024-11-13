import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryRewind from "react-query-rewind";

const queryClient = new QueryClient();

import PokemonList from "../components/PokemonList.jsx";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryRewind />
      <PokemonList />
    </QueryClientProvider>
  );
}

export default App;
