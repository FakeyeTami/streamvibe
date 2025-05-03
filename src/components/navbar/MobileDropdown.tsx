"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { NavItem } from "@/components/navbar/NavLinks";

export function MobileDropdown() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger>
        <Button
          size="2"
          variant="outline"
          radius="large"
          className="flex items-center justify-between gap-2 focus:outline-none focus:ring-0 focus:border-none"
        >
          Browse <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content size="2" className="z-50 relative">
        {NavItem.map((item) => (
          <DropdownMenu.Item key={item.link} asChild>
            <Link
              href={item.link}
              className="font-medium block p-3 bg-dark-900 hover:text-white hover:bg-dark-700 focus:outline-none focus:ring-0 focus:border-none"
            >
              {item.title}
            </Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
