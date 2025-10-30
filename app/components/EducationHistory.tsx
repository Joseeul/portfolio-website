// components/WorkExperience.tsx
import React from "react";

interface ExperienceItem {
  company: string;
  location: string;
  date: string;
  title: string;
  description: string | null;
  dotType: "outline" | "solid";
}

const experienceData: ExperienceItem[] = [
  {
    company: "Cognizant",
    location: "Mumbai",
    date: "Sep 2016 - July 2020",
    title: "Experience Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    dotType: "outline",
  },
  {
    company: "Sugee Pvt limited",
    location: "Mumbai",
    date: "Sep 2020 - July 2023",
    title: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    dotType: "solid",
  },
  {
    company: "Cinetstox",
    location: "Mumbai",
    date: "Sep 2023",
    title: "Lead UX Designer",
    description: null,
    dotType: "outline",
  },
];

// --- PERUBAHAN DI SINI ---
// Komponen helper untuk membuat titik (dot) di timeline
// Prop 'type' sekarang diabaikan karena semua dot memiliki gaya yang sama
const TimelineDot: React.FC<{ type: "outline" | "solid" }> = ({ type }) => {
  // Selalu render lingkaran outline hitam (border-brand-dark)
  // bg-white penting agar garis putus-putus tidak terlihat menembus lingkaran
  return (
    <div className="w-6 h-6 rounded-full border-2 border-brand-dark bg-white shrink-0 z-10"></div>
  );
};
// --- AKHIR PERUBAHAN ---

export default function EducationHistory() {
  return (
    // Section dengan background putih
    <section className="bg-white text-brand-dark-blue py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            My Education <span className="text-brand-orange">History</span>
          </h2>
        </div>

        {/* Kontainer Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-0">
            {experienceData.map((item, index) => (
              <div
                key={item.company}
                className="grid grid-cols-[1fr_auto_1fr] md:gap-x-12 gap-x-6 items-start"
              >
                {/* Kolom Kiri: Perusahaan & Tanggal (rata kanan) */}
                <div className="text-right pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark-blue">
                    {item.company}, {item.location}
                  </h3>
                  <p className="text-gray-500 mt-1">{item.date}</p>
                </div>

                {/* Kolom Tengah: Titik & Garis */}
                <div className="flex flex-col items-center h-full">
                  <TimelineDot type={item.dotType} />
                  {/* Tampilkan garis putus-putus jika bukan item terakhir */}
                  {index < experienceData.length - 1 && (
                    // Saya kembalikan min-h-[10rem] agar jaraknya konsisten
                    <div className="w-px grow min-h-40 border-l-2 border-dashed border-gray-300 -mt-1 -mb-1"></div>
                  )}
                </div>

                {/* Kolom Kanan: Jabatan & Deskripsi (rata kiri) */}
                <div className="text-left pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark-blue">
                    {item.title}
                  </h3>
                  {/* Tampilkan deskripsi hanya jika ada */}
                  {item.description && (
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
