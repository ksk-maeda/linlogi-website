"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-dark-blue"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#">
          <Image
            src={scrolled ? "/logo/headerBlue.svg" : "/logo/headerWhite.svg"}
            alt="LinLogi"
            width={120}
            height={60}
            className="h-8 w-auto"
            priority
          />
        </a>
        <a
          href="#contact"
          className={`text-sm font-medium px-5 py-2.5 rounded transition-colors ${
            scrolled
              ? "bg-main-blue text-white hover:bg-blue-hover"
              : "bg-white text-dark-blue hover:bg-white/90"
          }`}
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
