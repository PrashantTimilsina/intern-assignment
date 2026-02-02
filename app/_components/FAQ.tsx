"use client";
import { Button } from "@/components/ui/button";
import { FAQData } from "@/lib/data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";
function FAQ() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(0);

  return (
    <div className="container  flex flex-col items-center py-12 gap-6">
      <h1 className="lg:text-[56px] font-semibold text-xl">
        Frequently asked questions
      </h1>
      <div className="flex flex-col gap-5 w-full items-center max-lg:px-4">
        {FAQData.map((el, i) => (
          <div
            key={i}
            onClick={() => setClickedIndex(clickedIndex === i ? null : i)}
            className=" bg-seller lg:w-1/2 lg:p-6 rounded-md flex flex-col gap-4 w-full p-4 cursor-pointer"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{el.title}</h3>
              {clickedIndex == i ? (
                <ArrowDownRight
                  size={22}
                  onClick={() => setClickedIndex(null)}
                  className="cursor-pointer"
                />
              ) : (
                <ArrowUpRight
                  size={22}
                  onClick={() => setClickedIndex(i)}
                  className="cursor-pointer"
                />
              )}
            </div>
            {clickedIndex == i && (
              <p className="text-hero-secondary">{el.subtitle}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center lg:gap-4 max-lg:mt-4 max-lg:px-4 gap-6">
        <h1 className="lg:text-2xl font-semibold text-base">
          Still have a questions?
        </h1>
        <p className="text-sm">
          If you cannot find answer to your question in our FAQ, you can{" "}
          <span className="lg:block inline">
            always{" "}
            <span className="text-contact font-semibold">contact us</span>. We
            will answer to you shortly
          </span>
        </p>
        <Button className="cursor-pointer max-lg:w-full max-lg:py-6">
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default FAQ;
