// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    // Pastikan Anda memiliki 'brand-dark' dan 'brand-red' di tailwind.config.ts
    <footer className="bg-gray-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Atas: Navigasi & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 mb-16 text-center md:text-left">
          {/* Link Kiri */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium order-2 md:order-1">
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
          </div>

          {/* Logo Tengah */}
          <div className="order-1 md:order-2">
            <Link href="/" className="text-3xl font-bold">
              SJ<span className="text-brand-red">Design</span>
            </Link>
          </div>

          {/* Link Kanan */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium order-3">
            <Link
              href="/portfolio"
              className="hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-300 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Bagian Bawah: Media Sosial */}
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mb-4">Follow me on social media:</p>
          <div className="flex space-x-6">
            {/* --- Menggunakan <img> tag --- */}

            <Link
              href="#"
              aria-label="Instagram"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/code_icon.svg" // Ganti dengan path Anda
                alt="Instagram"
                className="w-6 h-6"
              />
            </Link>

            <Link
              href="#"
              aria-label="Twitter"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/code_icon.svg" // Ganti dengan path Anda
                alt="Twitter"
                className="w-6 h-6"
              />
            </Link>

            <Link
              href="#"
              aria-label="Dribbble"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/code_icon.svg" // Ganti dengan path Anda
                alt="Dribbble"
                className="w-6 h-6"
              />
            </Link>

            <Link
              href="#"
              aria-label="Facebook"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/assets/icons/code_icon.svg" // Ganti dengan path Anda
                alt="Facebook"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
