"use client";

import { useState } from "react";

export function useConfetti() {
  const [confetti, setConfetti] = useState(false);

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000);
  };

  return { confetti, setConfetti, triggerConfetti };
}