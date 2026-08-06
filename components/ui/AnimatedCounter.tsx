"use client";

import { useEffect, useState } from "react";

type Props = {
  end: number;
  suffix?: string;
};

export default function AnimatedCounter({
  end,
  suffix = "",
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = Math.max(1, Math.ceil(end / 60));

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}