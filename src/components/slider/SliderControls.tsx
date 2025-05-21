import { ArrowLeft, ArrowRight } from "lucide-react";
import Arrows from "@/components/slider/Arrows";
import SliderDots from "@/components/slider/SliderDots";
import { SliderControlsProps } from "@/types/SliderControlsProps";

export default function SliderControls({
  onNext,
  onPrev,
  currentIndex,
  total,
  goTo,
}: SliderControlsProps) {
  return (
    <div className="flex items-center gap-4">
      <Arrows onClick={onPrev}>
        <ArrowLeft />
      </Arrows>
      <SliderDots currentIndex={currentIndex} total={total} goTo={goTo} />
      <Arrows onClick={onNext}>
        <ArrowRight />
      </Arrows>
    </div>
  );
}
