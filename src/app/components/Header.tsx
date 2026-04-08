"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className={`text-xl font-bold tracking-tight font-[family-name:var(--font-inter)] transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          LinLogi
        </a>
        <a
          href="#contact"
          className={`text-sm font-medium px-5 py-2.5 rounded transition-colors ${
            scrolled
              ? "bg-navy text-white hover:bg-navy-light"
              : "bg-white text-navy hover:bg-white/90"
          }`}
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
