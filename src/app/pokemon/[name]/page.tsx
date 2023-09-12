import Link from "next/link";
import { Pokemon } from "@/@types/pokemon";

interface SingleProps {
  params: {
    name: string;
  };
}

async function getData(name: string) {
  const res = await fetch(
    `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${name}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Pokemon>;
}

export default async function Single({ params }: SingleProps) {
  // console.log(params);
  const pokemon = await getData(params.name);

  return (
    <main className="bg-cyan-950 min-h-screen">
      <h1 className="font-bold text-cyan-400 text-4xl p-12">
        {pokemon.name.fr}
      </h1>

      <Link href="/" className="text-white">
        ← Accueil
      </Link>

      <img
        src={pokemon.sprites.shiny || pokemon.sprites.regular}
        alt={pokemon.name.fr}
      />
    </main>
  );
}
