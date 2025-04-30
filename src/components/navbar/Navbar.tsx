import Image from "next/image";
import Link from "next/link";
import { Search } from "@/components/navbar/Search";
import { NavLinks } from "@/components/navbar/NavLinks";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center items-center">
      <div className="hidden md:flex w-full max-w-7xl justify-between items-center py-6 px-4">
        <Logo />
        <NavLinks />
        <Search />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image src="/assets/Logo.svg" alt="logo" width={166} height={60} />
    </Link>
  );
}
