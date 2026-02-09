import { Button } from "@/components/ui/button";
import Product from "./../assets/product.png";

import Image from "next/image";
import { TabsList, TabsTrigger, TabsContent, Tabs } from "@/components/ui/tabs";

const features = [
  {
    id: "1",
    title: "Product & Inventory Management",
    subtitle: "Everything you need to organize your catalog with ease.",
    description:
      "Manage your products, variants, and inventory from one place. Keep stock levels accurate across your online store, physical POS, and marketplace channels.",
    buttonText: "Manage Products",
  },
  {
    id: "2",
    title: "Shipping Integration",
    subtitle: "Seamlessly connect with shipping providers.",
    description:
      "Connect with shipping providers and automate labels, tracking, and delivery updates.",
    buttonText: "Configure Shipping",
  },
  {
    id: "3",
    title: "POS Integration",
    subtitle: "Sync your physical store with your online inventory.",
    description:
      "Sync your physical store with your online inventory and orders in real time.",
    buttonText: "Set Up POS",
  },
  {
    id: "4",
    title: "Order Management",
    subtitle: "Track, fulfill, and manage all your orders from one dashboard.",
    description:
      "Track, fulfill, and manage all your orders from one dashboard.",
    buttonText: "View Orders",
  },
];

function KeyFeatures() {
  return (
    <div className="container ">
      <Tabs defaultValue={features[0]?.id}>
        <div className="flex flex-col items-center gap-2 lg:gap-3 text-center ">
          <span className=" lg:mt-12 w-fit bg-background_brand px-6 py-2 rounded-full text-body-text_brand max-lg:text-[12px]">
            Key Features
          </span>

          <h1 className="text-xl lg:text-5xl font-semibold">
            Everything You Need to Run
            <span className="block">Your Store Smoothly</span>
          </h1>

          <p className="lg:mt-1 text-body-text_brand lg:text-base text-sm">
            Powerful tools that help you manage products, orders, shipping,
            payments, and{" "}
            <span className="lg:block ">
              customers — all from one simple dashboard.
            </span>
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="no-scrollbar hidden lg:flex justify-center gap-8 mt-10">
          {features.map((item, i) => (
            <TabsList key={i} variant="line">
              <TabsTrigger
                value={item.id}
                className="cursor-pointer data-[state=active]:text-primary_brand after:bg-primary_brand"
              >
                {item.title}
              </TabsTrigger>
            </TabsList>
          ))}
        </div>

        {/* Mobile Tabs */}
        <div className="no-scrollbar flex lg:hidden mt-6 overflow-x-auto gap-3 px-4">
          {features.map((item, i) => (
            <TabsList
              key={i}
              className="border-none bg-transparent p-0 shadow-none"
            >
              <TabsTrigger
                value={item.id}
                className="cursor-pointer 
                  data-[state=active]:text-primary_brand
                  border-none
                  outline-none
                  shadow-none
                  bg-background_brand
                  rounded-lg 
                  px-4 
                  py-2
                  whitespace-nowrap
                  text-sm
                  shrink-0
                  relative
                  data-[state=active]:after:absolute
                  data-[state=active]:after:bottom-0
                  data-[state=active]:after:left-0
                  data-[state=active]:after:right-0
                  data-[state=active]:after:h-0.5
                  data-[state=active]:after:bg-primary_brand
                  data-[state=active]:after:content-['']
                "
              >
                {item.title}
              </TabsTrigger>
            </TabsList>
          ))}
        </div>

        {features.map((item, i) => (
          <TabsContent key={i} value={item.id}>
            <div className="flex mt-7   ">
              <div className="w-133  bg-[#FEF5EC] flex flex-col gap-1 lg:gap-4 lg:justify-center lg:p-8 items-start text-title_brand p-5">
                <h3 className="text-xl lg:text-3xl  font-semibold ">
                  {item.title}
                </h3>

                <p className="font-semibold ">{item.subtitle}</p>
                <div className="relative  bg-[#FADFC3] block lg:hidden rounded-md h-64 lg:h-65.75 w-full overflow-hidden mt-5 ">
                  <Image
                    src={Product}
                    alt="Product Image"
                    width={356}
                    height={273}
                    className="relative lg:top-4.5 lg:left-5   lg:h-64 lg:w-96 rounded-tl-md left-15 h-52 w-96 top-12"
                  />
                </div>

                <p className="mt-4">{item.description}</p>
                <Button className="cursor-pointer mt-4 lg:w-auto w-full max-lg:py-5">
                  {item.buttonText}
                </Button>
              </div>

              <div className="w-202.5 flex-1  bg-[#FADFC3] pt-16 pl-[128] overflow-hidden hidden lg:block">
                <Image
                  src={Product}
                  alt="Product Image"
                  width={810}
                  height={633}
                  className="rounded-tl-2xl"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default KeyFeatures;
