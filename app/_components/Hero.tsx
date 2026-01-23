import { Button } from "@/components/ui/button";
import Aicene from "./../assets/aicene.png";
import DressNepal from "./../assets/dressnepal.png";
import GifyPoint from "./../assets/giftypoint.png";
import NaturalWears from "./../assets/naturalwears.jpg";
import OrganicWear from "./../assets/organicwear.png";
import YHH from "./../assets/YHH.png";
import { ArrowRight, Video } from "lucide-react";
import Image from "next/image";
import HeroPic from "./../assets/hero.png";
function Hero() {
  const images = [
    DressNepal,
    YHH,
    OrganicWear,
    GifyPoint,
    NaturalWears,
    Aicene,
  ];
  return (
    <div className="container mx-auto flex flex-col items-center lg:mt-28 mt-16  ">
      <div className="flex flex-col  px-2">
        <h1 className="lg:text-5xl font-sans-base font-semibold text-hero-primary px-5 text-2xl text-center">
          Run your whole eCommerce
        </h1>
        <p className="lg:text-5xl font-semibold lg:mt-2 text-2xl px-3 text-center">
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
      <h3 className="mt-3 text-sm">
        <span className="font-semibold">Secure setup</span> · Free 14-day trial,
        no card.
      </h3>

      <div className="flex justify-center mt-6 max-lg:hidden">
        <Image
          src={HeroPic}
          height={737}
          width={1077}
          alt="Hero section image"
          className="w-269.25 h-184.25"
        />
      </div>
      <div className="container mx-auto lg:mt-0 mt-8">
        <h1 className="font-semibold text-hero-primary text-center ">
          Trusted by Businesses Worldwide
        </h1>
        <div className="flex lg:w-300 max-lg:overflow-x-scroll  lg:justify-evenly  space-x-4  container mx-auto lg:mt-6 px-4 mt-4">
          {images.map((el, i) => (
            <div key={i}>
              <Image
                src={el}
                alt="company logo"
                width={241}
                height={41}
                className="lg:w-36 lg:h-7  w-32 h-6  object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
