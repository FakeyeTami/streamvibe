"use client";

import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components/navbar/SearchBar";
import { NavLinks } from "@/components/navbar/NavLinks";
import { Search as SearchIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MobileDropdown } from "@/components/navbar/MobileDropdown";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="w-full md:max-w-5xl lg:max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="flex lg:hidden">
              <MobileDropdown />
            </div>
          </div>
          <div className="hidden lg:flex">
            <NavLinks />
          </div>
          <SearchIcon
            onClick={() => setIsActive(!isActive)}
            className="cursor-pointer text-white"
          />
        </div>
      </nav>

      <AnimatePresence>
        {isActive && (
          <motion.div
            key="search-bar"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center px-4 pb-4"
          >
            <div className="w-full max-w-7xl">
              <SearchBar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="relative w-28 h-10 sm:w-[166px] sm:h-[60px]">
        <Image
          src="/assets/Logo.svg"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}
