import { Pokemon } from "@/@types/pokemon";
import PreviousButton from "@/components/PreviousButton";

interface SingleProps {
  params: {
    name: string;
  };
}

async function getData(name: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${name}`);

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

      <PreviousButton />

      <img
        src={pokemon.sprites.shiny || pokemon.sprites.regular}
        alt={pokemon.name.fr}
      />
    </main>
  );
}
