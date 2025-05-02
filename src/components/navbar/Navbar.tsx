"use client";

import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components/navbar/SearchBar";
import { NavLinks } from "@/components/navbar/NavLinks";
import { Search as SearchIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="w-full md:max-w-4xl lg:max-w-7xl mx-auto px-5">
        <div className="hidden md:flex justify-between items-center py-6">
          <Logo />
          <NavLinks />
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
      <Image src="/assets/Logo.svg" alt="logo" width={166} height={60} />
    </Link>
  );
}
