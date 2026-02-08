import React from "react";
import Aicene from "./../assets/aicene.png";
import DressNepal from "./../assets/dressnepal.png";
import GifyPoint from "./../assets/giftypoint.png";
import NaturalWears from "./../assets/naturalwears.jpg";
import OrganicWear from "./../assets/organicwear.png";
import YHH from "./../assets/YHH.png";
import Image from "next/image";
function ImgScroll() {
  const images = [
    DressNepal,
    YHH,
    OrganicWear,
    GifyPoint,
    NaturalWears,
    Aicene,
    GifyPoint,
    NaturalWears,
  ];
  return (
    <div className="flex flex-col gap-6 container">
      <h1 className="font-semibold text-hero-primary text-center lg:text-xl text-base">
        Trusted by Businesses Worldwide
      </h1>
      <div className="flex overflow-x-auto gap-4   lg:justify-between no-scrollbar">
        {images.map((el, i) => (
          <Image
            key={i}
            src={el}
            alt="company logo"
            width={241}
            height={41}
            // className="w-32 h-6 lg:w-36 lg:h-7 object-contain shrink-0"
            className="w-auto h-6 lg:w-auto lg:h-7 object-contain shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default ImgScroll;
