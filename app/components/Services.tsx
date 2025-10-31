// components/Services.tsx
import React from 'react';
// 1. Ubah import dari lucide ke heroicons
// Kita gunakan 'outline' agar sesuai dengan style desain (garis tipis)
import {
  SparklesIcon,
  Square3Stack3DIcon, // Pengganti 'Layers' (untuk branding)
  MagnifyingGlassCircleIcon, // Pengganti 'ClipboardSearch' (untuk research)
  ClipboardDocumentCheckIcon, // Pengganti 'ListChecks' (untuk testing)
} from '@heroicons/react/24/outline';

// 2. Perbarui array data dengan ikon-ikon baru
const serviceData = [
  {
    icon: SparklesIcon,
    title: 'Design',
    description: 'I specialize in web development and design, creating visually appealing, user-friendly digital experiences.',
  },
  {
    icon: Square3Stack3DIcon, // <-- Ikon diubah
    title: 'Branding',
    description: "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
  },
  {
    icon: MagnifyingGlassCircleIcon, // <-- Ikon diubah
    title: 'UX Research',
    description: '"I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.',
  },
  {
    icon: ClipboardDocumentCheckIcon, // <-- Ikon diubah
    title: 'Usability Testing',
    description: 'I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.',
  },
];

export default function Services() {
  return (
    <section className="background-color-primary text-brand-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services
          </h2>
          <p className="text-lg text-gray-600 mb-16 md:mb-20">
            Explore my design services, from user interface and experience to prototyping and testing. Let's craft
            exceptional digital experiences together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {serviceData.map((service) => (
            <div key={service.title}>
              
              {/* 3. Hapus prop 'strokeWidth' */}
              <service.icon 
                className="w-12 h-12 text-brand-red mb-6" 
                // strokeWidth={1.5} <-- HAPUS INI
              />
              
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}