// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 background-color-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Kolom Kiri: Teks */}
        <div className="space-y-6 z-40">
          <span className="text-lg font-medium text-color-primary">
            Mobile/Web Application Developer
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-color-primary leading-tight">
            Hi There, I'm <br />
            <span className="text-color-blue">Jose 👋</span>
          </h1>
          <p className="text-lg text-color-primary max-w-md">
            Hi there! I'm a mobile/web developer passionate about building
            intuitive digital journeys. Let’s create something amazing together!
          </p>
          {/* Tombol Aksi */}
          <div className="flex space-x-4 pt-4">
            <Link
              href="/projects"
              className="bg-white text-color-blue border border-custom-color px-8 py-3 rounded-md font-medium"
            >
              Explore my projects
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Gambar & Grafis */}
        <div className="relative w-full min-h-[500px] md:min-h-[600px]">
          {/* Teks 'UX' di latar belakang */}
          <div
            className="absolute inset-y-0 -right-20 md:-right-10 flex items-center  lg:text-[32rem]  z-10 overflow-hidden"
            aria-hidden="true"
          >
            <Image
              src="/assets/icons/code_icon.svg"
              width={500}
              height={500}
              alt={"Code Icon"}
            />
          </div>

          {/* Elemen Dekoratif */}
          <div
            className="absolute top-20 left-10 md:left-20 text-color-blue text-4xl font-mono z-20"
            aria-hidden="true"
          >
            ~~~
          </div>
          <div
            className="absolute top-32 left-12 md:left-24 z-20 space-y-2"
            aria-hidden="true"
          >
            <span className="block w-2 h-2 bg-brand-dark rounded-full"></span>
            <span className="block w-2 h-2 bg-brand-dark rounded-full"></span>
            <span className="block w-2 h-2 bg-brand-dark rounded-full"></span>
          </div>
          <div
            className="absolute bottom-20 right-10 md:right-20 text-color-blue text-3xl font-mono z-20"
            aria-hidden="true"
          >
            &darr;&darr;&darr;
          </div>

          {/* Gambar Utama */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            {/* ! PENTING: 
              - Ganti 'sarah-jones-portrait.png' dengan nama file gambar Anda.
              - Letakkan gambar Anda di dalam folder /public (misal: /public/sarah-jones-portrait.png).
              - Gambar HARUS berformat PNG dengan latar belakang transparan.
            */}
            {/* <Image
              src="/assets/images/avatar_emoji.png"
              alt="Portrait of Sarah Jones"
              width={400}
              height={600}
              className="object-cover object-top w-auto h-full max-h-[600px]"
              priority
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
