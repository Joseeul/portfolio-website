// components/Portfolio.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

// Data Dummy untuk Portfolio Items
const portfolioItems = [
  {
    imageSrc: '/assets/icons/code_icon.svg',
    altText: 'Educational Platform project',
    title: 'Educational Platform',
    category: 'Web Design / Usability Testing',
    link: '#', // Ganti dengan link project
  },
  {
    imageSrc: '/assets/icons/code_icon.svg',
    altText: 'Travel App Design project',
    title: 'Travel App Design',
    category: 'UX Research / App Design',
    link: '#',
  },
  {
    imageSrc: '/assets/icons/code_icon.svg',
    altText: 'Personal Page design',
    title: 'Personal Page',
    category: 'Web Design',
    link: '#',
  },
  {
    imageSrc: '/assets/icons/code_icon.svg',
    altText: 'Furniture Mobile App project',
    title: 'Furniture Mobile App',
    category: 'App Design',
    link: '#',
  },
  {
    imageSrc: '/assets/icons/code_icon.svg',
    altText: 'Coffee House Landing Page design',
    title: 'Coffee House Landing Page',
    category: 'UX Research / Web Design',
    link: '#',
  },
  {
    imageSrc: '/assets/icons/code_icon.svg',
    altText: 'Home Services Page design',
    title: 'Home Services Page',
    category: 'Web Design / Marketing',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section className="background-color-primary text-brand-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600">
            Explore my design services, from user interface and experience to prototyping and testing. Let's craft
            exceptional digital experiences together.
          </p>
        </div>

        {/* Grid Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg group">
              <div className="relative w-full h-60 overflow-hidden rounded-xl mb-6">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill // Menggunakan fill untuk mengisi container
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimasi gambar
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
                <Link href={item.link} className="p-2 -mr-2 text-brand-red hover:bg-brand-light rounded-full transition-colors">
                  <ArrowUpRightIcon className="w-6 h-6" />
                </Link>
              </div>
              <p className="text-gray-600 text-lg">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}