import { gql, request } from "graphql-request";
//import Film from "./Film";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";

const POKEMONS_QUERY = gql`
  query Pokemons {
    pokemons(limit: 10) {
      id
      name
    }
  }
`;

const BAD_QUERY = gql`
  query Pokemons {
    pokemons(limit: 10) {
      asdf
    }
  }
`;

const PokemonList = () => {
  const { data, error, failureReason, isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: async () =>
      request(
        "https://trygql.formidable.dev/graphql/basic-pokedex",
        BAD_QUERY,
        //POKEMONS_QUERY,
        { first: 10 }
      ),
  });

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div>
        {isLoading && <p>Loading...</p>}

        {error && <p>Oh no... {error.message}</p>}

        {data && (
          <ul>
            {data.pokemons.map((pokemon) => (
              <li key={pokemon.id}>{pokemon.name}</li>
            ))}
          </ul>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default PokemonList;
