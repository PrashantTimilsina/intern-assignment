"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonialData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
interface Testimonial {
  title: string;
  subtitle: string;
  image: StaticImageData;
  name: string;
  role: string;
}
function Testimonials() {
  const [showFirst, setShowFirst] = useState(true);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const newData: Testimonial[] = showFirst
    ? testimonialData.slice(0, 2)
    : testimonialData.slice(2, 4);

  return (
    <div className="container   flex justify-between lg:gap-10 lg:flex-row flex-col max-lg:px-2.5 gap-5">
      <div className="flex flex-col lg:gap-4 max-lg:text-center ">
        <h4>
          <span className="bg-background_brand text-body-text_brand rounded-full px-4 py-2 max-lg:mt-6 text-[12px]">
            Testimonial
          </span>
        </h4>
        <h1 className="lg:text-[56px] font-semibold text-hero-primary max-lg:mt-4 text-xl">
          Loved by <span className="lg:block inline">Businesses of All</span>{" "}
          Sizes
        </h1>
        <p className="text-body-text_brand max-lg:text-sm max-lg:mt-2 max-lg:px-2 text-xl">
          See how stores, brands, and retail teams use our
          <span className="lg:block inline">
            platform to simplify operations, boost sales, and scale{" "}
            <span className="lg:block inline">confidently.</span>
          </span>
        </p>
        <div className="flex gap-6 max-lg:hidden">
          <Button
            className=" bg-black cursor-pointer  rounded-full h-10 w-10 flex items-center justify-center text-white hover:bg-gray-700"
            onClick={() => setShowFirst(true)}
          >
            <MoveLeft />
          </Button>
          <Button
            className=" bg-primary_brand cursor-pointer  rounded-full h-10 w-10 flex items-center justify-center text-white"
            onClick={() => setShowFirst(false)}
          >
            <MoveRight />
          </Button>
        </div>
      </div>
      <div className="flex gap-6  flex-1 max-lg:hidden">
        {newData.map((el, i) => (
          <div
            key={i}
            className=" p-6 rounded-lg flex flex-col justify-between bg-[#F6F6F6]"
          >
            <h4 className="lg:text-lg font-semibold text-hero-primary whitespace-pre-line text-base">
              {el.title}
            </h4>
            <p className="text-body-text_brand max-lg:mt-4 text-base ">
              {el.subtitle}
            </p>
            <div className="flex">
              <div className="h-24 w-24 ">
                <Image
                  src={el.image}
                  height={100}
                  width={100}
                  alt="testimonial image"
                  className="object-cover h-18 w-18 rounded-xl"
                />
              </div>
              <div className="text-body-text_brand flex flex-col justify-center">
                <h3 className="text-body-text_brand font-semibold">
                  {el.name}
                </h3>
                <h6>{el.role}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {testimonialData.map((el, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className=" pt-6 px-6 rounded-lg flex flex-col justify-between bg-[#F6F6F6] gap-7">
                  <h4 className="text-lg font-semibold text-hero-primary">
                    {el.title}
                  </h4>
                  <p className="text-body-text_brand text-sm">{el.subtitle}</p>
                  <div className="flex mt-5">
                    <div className="h-24 w-24 ">
                      <Image
                        src={el.image}
                        height={100}
                        width={100}
                        alt="testimonial image"
                        className="object-cover h-16 w-16 rounded-xl"
                      />
                    </div>
                    <div className="text-body-text_brand flex flex-col justify-start  ">
                      <h3 className="text-body-text_brand font-semibold text-lg">
                        {el.name}
                      </h3>
                      <h6 className="text-sm">{el.role}</h6>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex gap-6 justify-center lg:hidden ">
        <Button
          className=" bg-black cursor-pointer  rounded-full h-10 w-10 flex items-center justify-center text-white hover:bg-gray-700"
          onClick={() => api?.scrollPrev()}
        >
          <MoveLeft />
        </Button>
        <Button
          className=" bg-primary_brand cursor-pointer  rounded-full h-10 w-10 flex items-center justify-center text-white"
          onClick={() => api?.scrollNext()}
        >
          <MoveRight />
        </Button>
      </div>
    </div>
  );
}

export default Testimonials;
