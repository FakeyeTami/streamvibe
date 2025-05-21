import { SliderDotsProps } from "@/types/SliderDotsProps";

export default function SliderDots({
  currentIndex,
  total,
  goTo,
}: SliderDotsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => goTo(idx)}
          className={`h-1 w-6 rounded-full transition-colors ${
            idx === currentIndex ? "bg-primary-900" : "bg-dark-400"
          }`}
        />
      ))}
    </div>
  );
}
