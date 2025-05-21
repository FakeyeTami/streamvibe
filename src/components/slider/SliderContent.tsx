import { ReactNode } from "react";

export default function SliderContent({ children }: { children: ReactNode }) {
  return <div className="flex gap-4">{children}</div>;
}
