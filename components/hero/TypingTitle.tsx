"use client";

import { useEffect, useState } from "react";

const text = "Technicien Informatique Senior";

export default function TypingTitle() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(timer);
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="mt-6 text-3xl text-slate-300">
      {display}
      <span className="animate-pulse">|</span>
    </h2>
  );
}