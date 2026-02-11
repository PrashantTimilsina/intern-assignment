"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogs } from "@/lib/data";
import BlogCard from "@/app/_components/BlogCard";
function Categories() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredBlogs =
    activeTab === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeTab);
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
      <Tabs onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="flex gap-2 bg-transparent max-lg:overflow-x-auto overflow-y-visible no-scrollbar max-lg:w-full max-lg:justify-start   h-10! ">
          {tabsTitle.map((item, i) => (
            <TabsTrigger
              key={i}
              value={item}
              className="cursor-pointer data-[state=active]:bg-primary_brand data-[state=active]:text-white py-2 px-4 rounded-[30px] text-base text-body-text_brand border border-[#D7D7D7] bg-background_brand  h-10 "
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-6 ">
          <h2 className="text-xl lg:text-[32px] font-semibold">
            Browse by categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 max-lg:space-y-4 ">
            {filteredBlogs.map((el, i) => (
              <BlogCard key={i} blog={el} location="blogpage" />
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default Categories;
