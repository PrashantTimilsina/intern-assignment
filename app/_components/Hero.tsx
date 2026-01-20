import { Button } from "@/components/ui/button";

import { ArrowRight, Video } from "lucide-react";
import Image from "next/image";
import HeroPic from "./../assets/hero.png";
function Hero() {
  return (
    <div className="container mx-auto flex flex-col items-center lg:mt-28 mt-14  ">
      <div className="flex flex-col  px-2">
        <h1 className="lg:text-5xl font-sans-base font-semibold text-hero-primary px-5 text-2xl">
          Run your whole eCommerce
        </h1>
        <p className="lg:text-5xl font-semibold mt-2 text-2xl px-3 ">
          {" "}
          business from one dashboard.
        </p>

        <p className="mt-3 text-center text-hero-secondary text-sm">
          Manage your products, orders, shipping, POS, discounts, and payouts
          seamlessly
        </p>
        <p className="text-center text-hero-secondary max-lg:px-4 text-sm">
          in a single SaaS platform, simplifying operations and saving you time.
        </p>
      </div>
      <div className="flex gap-4 font-light mt-6 max-lg:flex-col flex-row max-lg:w-full max-lg:px-4 max-lg:mt-8">
        <Button className="font-normal py-5 cursor-pointer max-lg:w-full max-lg:py-6">
          Start Free Trial
          <ArrowRight />
        </Button>
        <Button
          className="text-btn-text-secondary font-normal py-5 cursor-pointer max-lg:w-full max-lg:py-6"
          variant="outline"
        >
          <Video />
          Watch Demo
        </Button>
      </div>
      <h1 className="mt-3 text-sm">
        <span className="font-semibold">Secure setup</span> · Free 14-day trial,
        no card.{" "}
      </h1>
      <div className="flex justify-center mt-6 max-lg:hidden">
        <Image
          src={HeroPic}
          height={737}
          width={1077}
          alt="Hero section image"
          className="w-269.25 h-184.25"
        />
      </div>
    </div>
  );
}

export default Hero;
