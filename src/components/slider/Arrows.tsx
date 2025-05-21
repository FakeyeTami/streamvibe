import { ReactNode } from "react";

interface ArrowsProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Arrows({ children, onClick }: ArrowsProps) {
  return (
    <button
      onClick={onClick}
      className="bg-dark-700 p-3 rounded border-dark-600"
    >
      {children}
    </button>
  );
}
