"use client";

// je dois transformer mon composant en Client component
// pour avoir accès à `useState`
// ça sera la même chose pour `useEffect`, les interaction `onClick`

import { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You clicked
        {count} times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
