"use client";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  AcademicCapIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ChatBubbleOvalLeftIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import SidebarNavItem from "./SidebarNavItem";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-white border rounded-lg border-custom-color border-[0.5px] p-6 flex flex-col">
      {/* Bagian Profile */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4">
          <Image
            src="/assets/images/IMG_0497.jpeg"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Jose Andreas</h2>
        <p className="text-sm text-gray-500">Mobile Application Developer</p>
      </div>

      {/* Tombol Resume */}
      <button className="w-full background-color-blue text-white py-2 px-4 rounded-lg font-gabarito font-medium hover:cursor-pointer mb-8">
        See Resume
      </button>

      {/* Menu Navigasi */}
      <nav className="flex-1 mb-8">
        <ul>
          <SidebarNavItem
            icon={<HomeIcon className="w-5 h-5" />}
            label="Overview"
            href="/"
            active={pathname === "/"}
          />
          <SidebarNavItem
            icon={<UserIcon className="w-5 h-5" />}
            label="About Me"
            href="/aboutme"
            active={pathname === "/aboutme"}
          />
          <SidebarNavItem
            icon={<FolderIcon className="w-5 h-5" />}
            label="Projects"
            href="/projects"
            active={pathname === "/projects"}
          />
          <SidebarNavItem
            icon={<AcademicCapIcon className="w-5 h-5" />}
            label="Certificate"
            href="/certificate"
            active={pathname === "/certificate"}
          />
          <SidebarNavItem
            icon={<ChartBarIcon className="w-5 h-5" />}
            label="Statics"
            href="/statics"
            active={pathname === "/statics"}
          />
        </ul>
      </nav>

      {/* Link Sosial Media */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Social
        </h3>
        <div className="flex justify-around items-center">
          {/* Catatan: Heroicons tidak memiliki ikon brand (LinkedIn, GitHub, dll). 
            Ini adalah placeholder. Anda mungkin perlu library lain seperti 'react-icons' 
            atau menggunakan SVG kustom untuk ikon sosial.
          */}
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <GlobeAltIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <CodeBracketIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <CameraIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </aside>
  );
}
