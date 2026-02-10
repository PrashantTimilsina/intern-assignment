import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogs } from "@/lib/data";
import BlogCard from "@/app/_components/BlogCard";
function Categories() {
  const tabsTitle = [
    "All",
    "Inventory Management",
    "Order & Shipping",
    "POS + Retail",
    "Sales & Marketing",
    "Small Business Tips",
    "Product Updates",
  ];

  return (
    <div className="lg:py-15 py-6 ">
      <Tabs defaultValue="All">
        <TabsList className="flex gap-2 bg-transparent max-lg:overflow-x-auto max-lg:no-scrollbar">
          {tabsTitle.map((item, i) => (
            <TabsTrigger
              key={i}
              value={item}
              className="cursor-pointer data-[state=active]:bg-primary_brand data-[state=active]:text-white py-2 px-4 rounded-full text-base text-body-text_brand border border-[#D7D7D7] bg-background_brand"
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="mt-6 ">
          <h2 className="text-xl lg:text-[32px] font-semibold">
            Browse by categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 space-x-6 mt-8 max-lg:space-y-4">
            {blogs.map((el, i) => (
              <BlogCard key={i} blog={el} location="blogpage" />
            ))}
          </div>
        </div>

        {/* Add content for each tab */}
        {/* {tabsTitle.map((item, i) => (
          <TabsContent key={i} value={item}>
            <div className="p-4">Content for {item}</div>
          </TabsContent>
        ))} */}
      </Tabs>
    </div>
  );
}

export default Categories;
