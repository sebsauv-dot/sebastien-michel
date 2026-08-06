"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress((scrollTop / height) * 100);
    };

    update();

    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-150"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}