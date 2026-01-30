"use client";
import Link from "next/link";
import { useState } from "react";
import { MAIN_NAV, MOBILE_NAV } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <Scissors className="w-6 h-6 text-primary rotate-[-45deg] group-hover:rotate-[-30deg] transition-transform duration-300" />
            <span className="text-2xl font-serif font-bold tracking-tight">
              Sharp<span className="text-primary">Look</span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md font-oswald font-medium transition-colors hover:text-primary relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-h-0.5 bg-p0 w-0 primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="default"
            size="lg"
            className="hidden md:inline-flex font-semibold tracking-wide px-6 hover:scale-105 transition-transform duration-300"
          >
            <Link href="/booking">Book Now</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[5rem] bottom-0 h-full z-50 md:hidden">
          <nav className="container py-6 flex flex-col gap-6 bg-background/95 backdrop-blur-xl border-t border-border/40 animate-in slide-in-from-top">
            {MOBILE_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex flex-col gap-1 p-4 rounded-lg hover:bg-accent/50 transition-colors"
              >
                <span className="text-lg font-medium hover:text-primary transition-colors">
                  {item.title}
                </span>
                {item.description && (
                  <span className="text-sm text-muted-foreground">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
