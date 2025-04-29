"use client";

import { useState, useEffect } from 'react';

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export function useWindowSize(): WindowSize {
  // Initialize state with undefined values that will be set on client-side
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Set initial size immediately
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return windowSize;
}