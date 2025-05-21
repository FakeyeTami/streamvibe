type PlanType = "monthly" | "yearly";

export function Controls({
  selected,
  onChange,
}: {
  selected: PlanType;
  onChange: (value: PlanType) => void;
}) {
  const baseStyle = "py-2.5 px-5 rounded-md font-semibold text-sm md:text-base";
  const activeStyle = "bg-dark-600 text-white";
  const inactiveStyle = "";

  return (
    <div className="bg-dark-900 border border-dark-500 p-2 rounded-lg inline-flex gap-x-2">
      <button
        onClick={() => onChange("monthly")}
        className={`${baseStyle} ${
          selected === "monthly" ? activeStyle : inactiveStyle
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange("yearly")}
        className={`${baseStyle} ${
          selected === "yearly" ? activeStyle : inactiveStyle
        }`}
      >
        Yearly
      </button>
    </div>
  );
}
