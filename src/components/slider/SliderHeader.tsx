import { SliderHeaderProps } from "@/types/SliderHeaderProp";

export default function SliderHeader({
  title,
  description,
  children,
}: SliderHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
      <div className="flex flex-col gap-y-4">
        <h1 className="heading-secondary">{title}</h1>
        {description && <h2>{description}</h2>}{" "}
      </div>
      <div className="mt-6 lg:mt-0">{children}</div>{" "}
    </div>
  );
}
