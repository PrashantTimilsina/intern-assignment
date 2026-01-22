"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";

const features = [
  "Product & Inventory Management",
  "Shipping Integration",
  "POS Integration",
  "Order Management",
];

function KeyFeatures() {
  const [active, setActive] = useState(features[0]);

  const handleClick = (item: string) => {
    setActive((prev) => (prev === item ? prev : item));
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="mt-8 lg:mt-12 w-fit bg-seller px-6 py-2 rounded-full text-hero-secondary">
          Key Features
        </span>

        <h1 className="text-5xl font-semibold">
          Everything You Need to Run
          <span className="block">Your Store Smoothly</span>
        </h1>

        <p className="mt-1 text-logo-text max-w-2xl">
          Powerful tools that help you manage products, orders, shipping,
          payments, and{" "}
          <span className="lg:block ">
            customers — all from one simple dashboard.
          </span>
        </p>
      </div>

      <div className="flex justify-center gap-8 mt-10">
        {features.map((item) => (
          <Button
            key={item}
            onClick={() => handleClick(item)}
            variant="keyFeature"
            className={`pb-2 text-sm font-medium transition-all duration-200 cursor-pointer
              ${
                active === item
                  ? "border-b-2 border-key-btn text-key-btn "
                  : "text-gray-500 hover:text-key-btn"
              }`}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default KeyFeatures;
