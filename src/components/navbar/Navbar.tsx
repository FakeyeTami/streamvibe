import Image from "next/image";
import Link from "next/link";
import { Search } from "@/components/navbar/Search";
import { NavLinks } from "@/components/navbar/NavLinks";

export default function Navbar() {
  return (
    <nav className="hidden md:flex md:justify-around md:items-center md:py-5">
      <Logo />
      <NavLinks />
      <Search />
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image src="/assets/Logo.svg" alt="logo" width={200} height={200} />
    </Link>
  );
}
