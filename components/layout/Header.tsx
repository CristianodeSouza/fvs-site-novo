'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-preto-quente/5">
      <div className="flex items-center justify-between px-12 py-20 max-w-full">
        {/* Left: Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            <span className={`h-px w-6 bg-branco-quente transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-px w-6 bg-branco-quente ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-branco-quente transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
          <span className="text-sm tracking-widest text-pedra-clara">MENU</span>
        </div>

        {/* Center: Logo */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-6xl tracking-wider font-heading font-medium text-branco-quente hover:opacity-80 transition-opacity"
        >
          FVS
        </Link>

        {/* Right: Contact + Heart */}
        <div className="flex items-center gap-8">
          <Link
            href="#contact"
            className="text-sm tracking-widest text-pedra-clara hover:text-branco-quente transition-colors"
          >
            CONTATO
          </Link>
          <button
            aria-label="Favorite"
            className="hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-5 h-5 text-pedra"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="backdrop-blur-sm bg-preto-quente/30">
          <nav className="px-12 py-8 flex flex-col gap-8">
            <Link
              href="#about"
              className="text-sm tracking-wider text-pedra-clara hover:text-branco-quente transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SOBRE
            </Link>
            <Link
              href="#projects"
              className="text-sm tracking-wider text-pedra-clara hover:text-branco-quente transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJETOS
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wider text-pedra-clara hover:text-branco-quente transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTATO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
