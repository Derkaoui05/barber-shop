// src/providers/Providers.tsx

"use client";

import * as React from "react";
import { BookingProvider } from "@/contexts/BookingContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ConfettiProvider } from "@/components/shared/ConfettiProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <BookingProvider>
      <TooltipProvider delayDuration={300}>
        <ConfettiProvider />
        {children}
      </TooltipProvider>
    </BookingProvider>
  );
}