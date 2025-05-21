import React, { useState } from "react";
import SliderHeader from "@/components/slider/SliderHeader";
import SliderContent from "@/components/slider/SliderContent";
import SliderControls from "@/components/slider/SliderControls";

interface SliderProps {
  title: string;
  description: string;
  items: React.ReactNode[];
  itemsPerPage?: number;
}

export default function Slider({
  title,
  description,
  items,
  itemsPerPage = 5,
}: SliderProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = pageIndex * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = items.slice(start, end);

  const next = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goTo = (index: number) => {
    setPageIndex(index);
  };

  return (
    <div className="space-y-6">
      <SliderHeader title={title} description={description}>
        <SliderControls
          onNext={next}
          onPrev={prev}
          currentIndex={pageIndex}
          total={totalPages}
          goTo={goTo}
        />
      </SliderHeader>
      <SliderContent>{currentItems}</SliderContent>
    </div>
  );
}
