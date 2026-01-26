import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
function Testimonials() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col gap-4">
        <h4>
          <span className="bg-seller text-hero-secondary rounded-full px-4 py-2">
            Testimonial
          </span>
        </h4>
        <h1 className="text-[56px] font-semibold text-hero-primary ">
          Loved by <span className="lg:block inline">Businesses of All</span>{" "}
          Sizes
        </h1>
        <p className="text-hero-secondary">
          See how stores, brands, and retail teams use our
          <span className="lg:block inline">
            platform to simplify operations, boost sales, and scale{" "}
            <span className="lg:block inline">confidently.</span>
          </span>
        </p>
        <div className="flex gap-4">
          <Button className=" bg-black cursor-pointer  rounded-full h-10 w-10 flex items-center justify-center text-white">
            <MoveLeft />
          </Button>
          <Button className=" bg-[#3A3F87] cursor-pointer  rounded-full h-10 w-10 flex items-center justify-center text-white">
            <MoveRight />
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Testimonials;
