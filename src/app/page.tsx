"use client";

import { Hero } from "@/components/home/Hero";
import { SupportedDevices } from "@/components/home/SupportedDevices";
import Faq from "@/components/home/Faq";
import Subscription from "@/components/home/Subscription";

export default function Home() {
  return (
    <main>
      <Hero />
      <SupportedDevices />
      <Faq />
      <Subscription />
    </main>
  );
}
