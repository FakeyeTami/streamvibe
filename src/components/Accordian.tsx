import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function Accordion({
  index,
  label,
  text,
}: {
  index: number;
  label: string;
  text: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="px-5 py-6 contents">
      <div
        className="flex items-center justify-between gap-x-4 cursor-pointer"
        onClick={handleToggle}
      >
        <span className="bg-dark-600 border-dark-500 p-4 text-white min-w-[50px] text-center rounded-lg">
          {`0${index}`}
        </span>

        <div className="flex-1 ml-4 text-left">
          <h3 className="text-white font-medium text-lg md:text-xl">{label}</h3>
        </div>

        <span className="text-white">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </div>

      {isOpen && (
        <div className="-mt-3.5 md:ml-20">
          <p className="paragraph-text">{text}</p>
        </div>
      )}
    </div>
  );
}
