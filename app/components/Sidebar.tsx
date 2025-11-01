"use client";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  AcademicCapIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SidebarNavItem from "./SidebarNavItem";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarContent = (
    <>
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

      <a
        href="https://drive.google.com/file/d/1JvHyZUpFZvyWiuEvkWvNrM5FiHW-AkVB/view?usp=sharing"
        target="_blank"
      >
        <button className="w-full background-color-blue text-white py-2 px-4 rounded-lg font-gabarito font-medium hover:cursor-pointer mb-8">
          See Resume
        </button>
      </a>

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

      <div>
        <h3 className="text-xl font-medium text-color-primary mb-4">Social</h3>
        <div className="flex justify-around items-center">
          <a
            href="https://www.linkedin.com/in/jose-andreas-64b857387/"
            target="_blank"
          >
            <Image
              src="assets/icons/linkedin_icon.svg"
              alt="Career"
              width={24}
              height={24}
            />
          </a>
          <a href="https://github.com/Joseeul" target="_blank">
            <Image
              src="assets/icons/github_icon.svg"
              alt="Career"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://discord.com/users/891865248179576853"
            target="_blank"
          >
            <Image
              src="assets/icons/discord_icon.svg"
              alt="Career"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.instagram.com/joseandreas54/" target="_blank">
            <Image
              src="assets/icons/instagram_icon.svg"
              alt="Career"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2 bg-white rounded-full shadow-lg text-color-primary"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        )}
      </button>

      <aside className="hidden lg:flex w-64 shrink-0 bg-white rounded-lg border-custom-color border-[0.5px] p-6 flex-col">
        {sidebarContent}
      </aside>

      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          
          fixed top-0 left-0 w-64 h-full bg-white p-6 flex flex-col z-40 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}

          
          lg:hidden
        `}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
