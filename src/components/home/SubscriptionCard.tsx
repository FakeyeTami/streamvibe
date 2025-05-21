import { Card } from "@radix-ui/themes";

export default function SubscriptionCard({
  label,
  description,
  price,
  time,
}: {
  label: string;
  description: string;
  price: number;
  time: string;
}) {
  return (
    <Card className="p-6 lg:p-10 rounded-xl flex flex-col gap-10 bg-dark-700 border-dark-500">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-xl md:text-2xl text-white">
          {label}
        </h3>
        <p>{description}</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="font-semibold text-2xl text-white">${price}</span>
        <span>/ {time}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <button className="w-full py-3.5 px-4 lg:py-4 lg:px-6 rounded-xl bg-dark-800 border border-dark-500 text-white text-sm lg:text-base">
          Start Free Trial
        </button>
        <button className="w-full py-3.5 px-4 lg:py-4 lg:px-6 rounded-xl bg-primary-900 text-white text-sm lg:text-base">
          Choose Plan
        </button>
      </div>
    </Card>
  );
}
