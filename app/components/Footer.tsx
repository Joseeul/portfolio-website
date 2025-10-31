// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    // Pastikan Anda memiliki 'brand-dark' dan 'brand-red' di tailwind.config.ts
    <footer className="background-color-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Atas: Navigasi & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 mb-16 text-center md:text-left">
          {/* Link Kiri */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium order-2 md:order-1">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link
              href="/projects"
              className="hover:text-gray-300 transition-colors"
            >
              Projects
            </Link>
          </div>

          {/* Logo Tengah */}
          <div className="order-1 md:order-2">
            <Link href="/" className="text-3xl font-bold">
              Jose<span className="text-brand-red"> Andreas</span>
            </Link>
          </div>

          {/* Link Kanan */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium order-3">
            <Link
              href="/certificate"
              className="hover:text-gray-300 transition-colors"
            >
              Certificate
            </Link>
            <Link
              href="/statics"
              className="hover:text-gray-300 transition-colors"
            >
              Statics
            </Link>
          </div>
        </div>

        {/* Bagian Bawah: Media Sosial */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            {/* --- Menggunakan <img> tag --- */}

            <a
              href="https://www.linkedin.com/in/jose-andreas-64b857387/"
              aria-label="Linkedin"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/linkedin_white.svg" // Ganti dengan path Anda
                alt="Linkedin"
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://github.com/Joseeul"
              aria-label="GitHub"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/github_white.svg" // Ganti dengan path Anda
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://discord.com/users/891865248179576853"
              aria-label="Discord"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/discord_white.svg" // Ganti dengan path Anda
                alt="Discord"
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://www.instagram.com/joseandreas54/"
              aria-label="Instagram"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/instagram_white.svg" // Ganti dengan path Anda
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
