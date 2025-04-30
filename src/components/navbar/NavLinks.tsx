"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem = [
  { title: "Home", link: "/" },
  { title: "Movies", link: "/movies" },
  { title: "Shows", link: "/shows" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex py-3 px-5 gap-4 rounded-xl bg-dark-900 border border-dark-600">
      {NavItem.map((item, i) => (
        <NavLink
          title={item.title}
          link={item.link}
          key={i}
          isActive={pathname === item.link}
        />
      ))}
    </ul>
  );
}

function NavLink({
  title,
  link,
  isActive,
}: {
  title: string;
  link: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={link}
      className={`text-lg font-medium py-2 px-4 rounded-md hover:bg-dark-700 ${isActive ? "text-white bg-dark-700" : ""}`}
    >
      {title}
    </Link>
  );
}
