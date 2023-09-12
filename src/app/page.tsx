import PokemonCard from "@/components/PokemonCard"; // @ : alias de `src/`

import { Pokemon } from "@/@types/pokemon";

async function getData() {
  const res = await fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Pokemon[]>;
}

export default async function Home() {
  const pokemons = await getData();
  const pokemonsFiltered = pokemons.slice(0, 12);
  console.log(pokemonsFiltered); // ça se passe côté serveur, donc dans le terminal !

  return (
    // padding : je veux 48px
    //
    // 1 unité TW = 0.25rem // 4px
    // 1 unité  =  4px
    // x unités = 48px
    //
    // 48 * 1 / 4 = 12 unités TW
    //
    // → classe : `p-12`
    <main className="bg-cyan-950 min-h-screen p-12">
      <h1 className="font-bold text-cyan-400 text-4xl pb-12">Pokedex</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {pokemonsFiltered.map((pokemon) => (
          <a
            key={pokemon.pokedexId}
            href={`/pokemon/${pokemon.name.fr.toLowerCase()}`}
          >
            <PokemonCard pokemon={pokemon} />
          </a>
        ))}
      </div>
    </main>
  );
}
