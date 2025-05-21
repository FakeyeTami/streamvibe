"use client";

import { useState } from "react";
import { Controls } from "./Controls";
import SubscriptionCard from "./SubscriptionCard";

type PlanType = "monthly" | "yearly";

const subscriptions = [
  {
    label: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    pricing: {
      monthly: { price: 9.99, time: "month" },
      yearly: { price: 99.99, time: "year" },
    },
  },
  {
    label: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    pricing: {
      monthly: { price: 12.99, time: "month" },
      yearly: { price: 129.99, time: "year" },
    },
  },
  {
    label: "Premium Plan",
    description:
      "Access to the widest selection of movies and shows, including all new releases and Offline Viewing.",
    pricing: {
      monthly: { price: 14.99, time: "month" },
      yearly: { price: 149.99, time: "year" },
    },
  },
];

export default function Subscription() {
  const [plan, setPlan] = useState<PlanType>("monthly");

  return (
    <section className="section-container-wide mt-42">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex flex-col gap-y-4">
          <h2 className="heading-secondary">
            Choose the plan that&#39;s right for you
          </h2>
          <p className="paragraph-text text-left">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="mt-6 lg:mt-0">
          <Controls selected={plan} onChange={setPlan} />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptions.map((sub) => (
          <SubscriptionCard
            key={sub.label}
            label={sub.label}
            description={sub.description}
            price={sub.pricing[plan].price}
            time={sub.pricing[plan].time}
          />
        ))}
      </div>
    </section>
  );
}
