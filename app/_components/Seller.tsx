import SellerImage from "./../assets/SellerImage.jpg";
import Image from "next/image";
import { sellerData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { SellerType } from "@/types/arr";

import Link from "next/link";
import { cn } from "@/lib/utils";
function Seller() {
  return (
    <div className="lg:container  lg:px-0 px-2 ">
      <div className="flex gap-1  lg:gap-4 space-x-16 lg:flex-row flex-col ">
        <h1 className="font-semibold text-2xl lg:text-5xl  max-lg:text-center whitespace-nowrap max-lg:px-6">
          Built for Every Type
          <span className="lg:block inline"> of Seller</span>
        </h1>
        <h2 className=" flex-1 lg:py-2 text-logo-text max-lg:text-center">
          Whether you sell online, in-store, or across multiple channels, our
          <span className="lg:block inline">
            platform adapts to the way you run your business.
          </span>
        </h2>
      </div>
      <div className="lg:mt-8 flex gap-3 mt-4 ">
        <div className="max-lg:hidden ">
          <Image
            src={SellerImage}
            alt="seller image"
            height={394}
            width={647}
            className="h-96 w-125 rounded-2xl object-cover"
          />
        </div>
        <div className="grid grid-cols-2 lg:w-1/2  lg:px-4 lg:gap-3 max-lg:w-full gap-2">
          {sellerData.map((el: SellerType, i) => (
            <div
              key={i}
              className="bg-white group p-4 flex flex-col gap-4 rounded-2xl hover:ring-secondary_brand hover:ring cursor-pointer"
            >
              <div className="flex gap-3 items-center font-semibold text-hero-primary">
                <el.icon />

                <h3>{el.title}</h3>
              </div>
              <p className="line-clamp-2 text-hero-primary font-light text-base">
                {el.subtitle}
              </p>

              <Link
                href={"#"}
                className={cn(
                  "flex justify-start items-center gap-2 font-light cursor-pointer text-body-text_brand text-base group-hover:text-secondary_brand",
                )}
              >
                Read More
                <ArrowUpRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Seller;
