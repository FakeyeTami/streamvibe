import { Card } from "@radix-ui/themes";
import { ReactElement } from "react";

interface DeviceCardProps {
  icon: ReactElement;
  label: string;
  description: string;
}

export default function DeviceCard({
  icon,
  label,
  description,
}: DeviceCardProps) {
  return (
    <Card className="relative overflow-hidden flex flex-col gap-8 p-12 bg-dark-900 rounded-xl">
      <div className="absolute -top-2 -right-3 w-20 h-20 bg-gradient-to-br rounded-full from-red-700/50 to-transparent blur-2xl pointer-events-none z-0" />

      <div className="relative z-10 flex items-center justify-start gap-x-4">
        <div className="bg-dark-800 border-dark-600 p-2 rounded-md flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-semibold text-xl md:text-2xl text-white">
          {label}
        </h3>
      </div>

      <div className="relative z-10 text-muted-foreground">{description}</div>
    </Card>
  );
}
