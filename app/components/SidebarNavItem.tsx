import { ReactNode } from "react";
import Link from "next/link";
type NavItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  href: string;
};

export default function SidebarNavItem({
  icon,
  label,
  active = false,
  href,
}: NavItemProps) {
  return (
    <li className="mb-2">
      <Link
        href={href}
        className={`flex items-center gap-3 p-3 rounded-lg font-medium text-sm
          ${
            active
              ? "background-color-blue-secondary text-color-blue font-semibold text-base" // Style saat aktif
              : "text-gray-600 hover:bg-gray-100 text-base font-semibold" // Style normal
          }
          transition-colors
        `}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
