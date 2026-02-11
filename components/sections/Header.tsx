"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WebyboxIcon } from "@/components/WebyboxIcon";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-neutral-200 bg-white/80 shadow-sm backdrop-blur-lg dark:border-neutral-800 dark:bg-[#181620]/80"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet-400 focus-visible:ring-offset-2 rounded-lg"
            aria-label="Webybox home"
          >
            <WebyboxIcon className="h-8 w-8" />
            <Image
              src="/name.svg"
              alt="webybox"
              width={100}
              height={24}
              className="h-8 w-auto"
              priority
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet-400 focus-visible:ring-offset-2 rounded dark:text-neutral-300 dark:hover:text-brand-violet-400"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet-400 focus-visible:ring-offset-2 rounded dark:text-neutral-300 dark:hover:text-brand-violet-400"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet-400 focus-visible:ring-offset-2 rounded dark:text-neutral-300 dark:hover:text-brand-violet-400"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
