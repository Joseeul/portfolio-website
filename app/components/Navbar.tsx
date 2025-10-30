// components/Navbar.tsx
"use client"; // Diperlukan karena kita menggunakan hook (useState)

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Asumsi Anda punya heroicons

// Definisikan link navigasi Anda
// Saya akan gunakan link dari kode lama Anda dan tambahkan "Home" & "Contact"
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Simulasikan link "Home" aktif seperti di gambar
  // TODO: Ganti ini dengan logika 'usePathname' dari Next.js untuk deteksi rute
  const activePath = "/"; 

  // Komponen helper untuk merender link
  const renderLink = (link: typeof navLinks[0], isMobile: boolean = false) => {
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
            ? 'block w-full px-4 py-3 text-center rounded-lg hover:bg-gray-700' // Gaya Mobile
            : 'hover:text-gray-300' // Gaya Desktop
        }`}
        onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)} // Tutup menu saat diklik
      >
        {link.label}
      </Link>
    );
  };

  return (
    // 1. Header sebagai container 'fixed' yang men-center-kan navbar
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      
      {/* 2. Navigasi utama sebagai "kapsul" hitam */}
      <nav className="w-full max-w-6xl bg-blue-500 text-white rounded-full shadow-lg px-6 py-3">
        
        {/* 3. Kontainer Flex internal */}
        <div className="flex items-center justify-between">

          {/* --- Menu Desktop (tersembunyi di mobile) --- */}
          <div className="hidden md:flex items-center justify-between w-full">
            
            {/* Link Kiri */}
            <div className="flex items-center space-x-6">
              {renderLink(navLinks[0])} {/* Home */}
              {renderLink(navLinks[1])} {/* About */}
              {renderLink(navLinks[2])} {/* Services */}
            </div>

            {/* Logo (Logo 'SJ Design' Anda, ditata seperti 'JCREA') */}
            <Link href="/" className="text-3xl font-bold text-white">
              SJ<span className="text-brand-red">Design</span>
            </Link>

            {/* Link Kanan */}
            <div className="flex items-center space-x-6">
              {renderLink(navLinks[3])} {/* Portfolio */}
              {renderLink(navLinks[4])} {/* Blog */}
              {renderLink(navLinks[5])} {/* Contact */}
            </div>
          </div>

          {/* --- Menu Mobile (tersembunyi di desktop) --- */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Logo Mobile */}
            <Link href="/" className="text-2xl font-bold text-white">
              SJ<span className="text-brand-red">Design</span>
            </Link>

            {/* Tombol Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-50 p-2 rounded-md text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* --- Dropdown Menu Mobile --- */}
        {isMobileMenuOpen && (
          // Ditempatkan di luar 'nav' secara visual agar 'nav' tetap bulat
          // tapi secara teknis masih di dalam 'header'
          <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 mx-4">
            <div className="bg-brand-dark rounded-3xl shadow-lg p-4 space-y-2">
              {navLinks.map(link => renderLink(link, true))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}