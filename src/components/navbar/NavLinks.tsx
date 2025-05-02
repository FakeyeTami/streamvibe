"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Navlink } from "@/types/navlink";

export const NavItem = [
  { title: "Home", link: "/" },
  { title: "Movies & Shows", link: "/movies-shows" },
  { title: "Support", link: "/support" },
  { title: "Subscription", link: "/subscription" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center p-3 gap-4 rounded-xl bg-dark-900 border-4 border-dark-600">
      {NavItem.map((item) => (
        <NavLink
          title={item.title}
          link={item.link}
          key={item.link}
          isActive={pathname === item.link}
        />
      ))}
    </ul>
  );
}

function NavLink({ title, link, isActive }: Navlink) {
  return (
    <Link
      href={link}
      className={`font-medium py-2.5 px-3.5 rounded-md hover:bg-dark-700 ${isActive ? "text-white bg-dark-700" : ""}`}
    >
      {title}
    </Link>
  );
}
