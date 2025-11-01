// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

// Definisikan link navigasi Anda
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/certificate", label: "Certificate" },
  { href: "/statics", label: "Statics" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activePath = usePathname();

  // Komponen helper untuk merender link
  const renderLink = (
    link: (typeof navLinks)[0],
    isMobile: boolean = false
  ) => {
    const isActive = activePath === link.href;

    if (isActive && !isMobile) {
      // Gaya "Aktif" untuk Desktop (Kapsul Oranye)
      return (
        <Link
          key={link.label}
          href={link.href}
          className="bg-brand-active-nav text-white px-5 py-2 rounded-full font-medium transition-colors"
        >
          {link.label}
        </Link>
      );
    }

    // Gaya Default
    return (
      <Link
        key={link.label}
        href={link.href}
        className={`transition-colors ${
          isMobile
            ? "block w-full px-4 py-3 text-center rounded-lg " // Gaya Mobile
            : "" // Gaya Desktop
        }`}
        onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)} // Tutup menu saat diklik
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:flex md:justify-center">
      
      {/* 2. Navigasi Desktop (Kapsul Panjang) */}
      <nav 
        // --- UBAH DISINI ---
        // 1. Ganti 'bg-white/80' -> 'bg-gradient-to-b from-white/90 to-white/60'
        // 2. Ganti 'backdrop-blur-lg' -> 'backdrop-blur-2xl'
        // 3. Tambahkan 'border border-white/30'
        className="hidden md:flex bg-linear-to-b from-white/90 to-white/60 backdrop-blur-2xl text-color-blue rounded-full shadow-lg px-6 py-3 border border-white/30"
      >
        <div className="flex items-center space-x-6">
          {renderLink(navLinks[0])}
          {renderLink(navLinks[1])}
          {renderLink(navLinks[2])}
          {renderLink(navLinks[3])}
        </div>
      </nav>

      {/* 3. Tombol Menu Mobile (Bulat) */}
      <div className="md:hidden flex justify-end w-full">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          // --- UBAH DISINI --- (Lakukan hal yang sama)
          // 1. Ganti 'bg-white/80' -> 'bg-gradient-to-b from-white/90 to-white/60'
          // 2. Ganti 'backdrop-blur-lg' -> 'backdrop-blur-2xl'
          // 3. Tambahkan 'border border-white/30'
          // 4. Ganti 'text-neutral-900' -> 'text-color-blue' (Agar konsisten)
          className="z-50 p-3 rounded-full text-color-blue bg-linear-to-b from-white/90 to-white/60 backdrop-blur-2xl shadow-lg border border-white/30"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>


      {/* 4. Dropdown Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 mx-4">
          <div 
            // --- UBAH DISINI --- (Lakukan hal yang sama)
            // 1. Ganti 'bg-white/80' -> 'bg-gradient-to-b from-white/90 to-white/60'
            // 2. Ganti 'backdrop-blur-lg' -> 'backdrop-blur-2xl'
            // 3. Tambahkan 'border border-white/30'
            // 4. Ganti 'text-neutral-900' -> 'text-color-blue' (Agar konsisten)
            className="bg-linear-to-b from-white/90 to-white/60 backdrop-blur-2xl text-color-blue rounded-3xl shadow-lg p-4 space-y-2 border border-white/30"
          >
            {navLinks.map((link) => renderLink(link, true))}
          </div>
        </div>
      )}
    </header>
  );
}