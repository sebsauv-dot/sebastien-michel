"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown
        className="text-blue-400"
        size={34}
      />
    </div>
  );
}