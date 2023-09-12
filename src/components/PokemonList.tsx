"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { Pokemon } from "@/@types/pokemon";

import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(12);

  const start = page * perPage;
  const end = start + perPage;

  const pokemonsFiltered = pokemons.slice(start, end);

  useEffect(() => {
    const url =
      page === 0 && perPage === 12
        ? `${pathname}`
        : `${pathname}?page=${page}&perPage=${perPage}`;
    router.push(url);
  }, [page, pathname, perPage, router]);

  return (
    <>
      <div className="flex justify-between px-12">
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border border-cyan-900 text-slate-300 transition-all p-2 min-w-[10rem] rounded-lg font-bold hover:border-cyan-400 disabled:border-slate-600 disabled:text-slate-600"
            disabled={page === 0}
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Précédent
          </button>

          <button
            type="button"
            className="border border-cyan-900 text-slate-300 transition-all p-2 min-w-[10rem] rounded-lg font-bold hover:border-cyan-400 disabled:border-slate-600 disabled:text-slate-600"
            disabled={pokemons.length <= (page + 1) * perPage}
            onClick={() => setPage((currentPage) => currentPage + 1)}
          >
            Suivant
          </button>
        </div>

        <div>
          <span className="text-slate-300">Afficher </span>
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
          >
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <span className="text-slate-300"> Pokemons par page</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {pokemonsFiltered.map((pokemon) => (
          <Link
            key={pokemon.pokedexId}
            href={`/pokemon/${pokemon.name.fr.toLowerCase()}`}
          >
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </>
  );
}
