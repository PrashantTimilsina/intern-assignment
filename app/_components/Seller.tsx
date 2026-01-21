import React from "react";
import SellerImage from "./../assets/SellerImage.jpg";
import Image from "next/image";
import { sellerData } from "@/lib/data";
function Seller() {
  return (
    <div className="container mx-auto px-10">
      <div className="flex  gap-4 space-x-16">
        <h1 className="font-semibold text-5xl whitespace-nowrap">
          Built for Every Type
          <span className="block"> of Seller</span>
        </h1>
        <h2 className=" flex-1 py-2 text-logo-text">
          Whether you sell online, in-store, or across multiple channels, our
          <br />
          platform adapts to the way you run your business.
        </h2>
      </div>
      <div className="mt-8 flex gap-3 ">
        <div className=" ">
          <Image
            src={SellerImage}
            alt="seller image"
            height={394}
            width={647}
            className="h-80 w-125 rounded"
          />
        </div>
        <div className="grid grid-cols-2 w-1/2  px-4 gap-3">
          {sellerData.map((el, i) => (
            <div key={i} className="bg-white p-4 flex flex-col gap-6 rounded ">
              <div className="flex gap-3 items-center font-semibold text-hero-primary">
                <el.icon />
                <h3>{el.title}</h3>
              </div>
              <p className="line-clamp-2 text-hero-primary font-light text-base">
                {el.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Seller;
