"use client";

import ReactConfetti from "react-confetti";
import { useConfetti } from "@/hooks/use-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

export function ConfettiProvider() {
  const { width, height } = useWindowSize();
  const { confetti, setConfetti } = useConfetti();

  return (
    <>
      {confetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          onConfettiComplete={() => setConfetti(false)}
        />
      )}
    </>
  );
}