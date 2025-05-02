"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search as LucideSearch } from "lucide-react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    router.push(`/search?query=${encodeURIComponent(trimmedQuery)}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        id="search"
        type="text"
        placeholder="Find Movies and TV Shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="appearance-none outline-none ring-0 focus:outline-none focus:ring-0 border border-dark-600 text-white rounded-xl py-3 pl-10 bg-dark-900 w-full"
      />
    </form>
  );
}
