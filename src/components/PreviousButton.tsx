"use client";

import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      ← Accueil
    </button>
  );
}
