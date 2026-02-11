import { blogs } from "@/lib/data";
import Image from "next/image";
import Categories from "./_components/Categories";

function Blog() {
  const latestBlog = blogs[0];
  return (
    <div className="container lg:py-25 py-6 max-lg:px-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 max-md:gap-6 md:gap-4">
        <div className="lg:max-w-160 w-full">
          <h3 className="lg:text-[32px] font-semibold text-xl">Latest Post</h3>
          <div className="relative w-full mt-6">
            <div className="relative lg:h-74.75 w-full h-52.25">
              <Image
                src={latestBlog.image}
                alt="Blog Image"
                fill
                className="rounded-tl-3xl rounded-tr-3xl object-cover"
              />
              <span className="text-[12px] absolute z-40 top-4 lg:top-6 left-4 lg:left-6 text-white bg-white/10 backdrop-blur-xl px-6 py-2 rounded-[20px] text-sm font-medium border-2 border-t-white/30 border-l-white/75 border-b-white/30 border-r-white/75 shadow-lg">
                Stay In Sync
              </span>
            </div>
            <div className="py-4 px-6 space-y-4 bg-white lg:bg-background_brand max-lg:shadow-md rounded-bl-3xl rounded-br-3xl">
              <h2 className="lg:text-xl font-bold text-title_brand text-base">
                {latestBlog.title}
              </h2>
              <p className="text-[#464646] max-lg:text-sm">
                {latestBlog.subtitle}
              </p>
              <div className="flex gap-4 items-center ">
                <div className="h-15 w-15 relative shrink-0 ">
                  <Image
                    src={latestBlog.ownerImage}
                    alt={latestBlog.ownerName}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-title_brand font-medium max-lg:text-sm">
                    {latestBlog.ownerName}
                  </h3>
                  <p className="text-[#959595] lg:text-sm font-medium text-[12px]">
                    {latestBlog.date} · <span>{latestBlog.readDuration}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="lg:text-[32px] font-semibold text-xl">Top Reads</h3>

          <div className="space-y-4 lg:mt-6  mt-4 overflow-y-scroll max-h-[514px] no-scrollbar">
            {blogs.map((blog, index) => (
              <div key={index} className="flex rounded-md w-full">
                <div className="lg:h-38 lg:w-57 relative bg-background_brand rounded-tl-3xl shrink-0 w-34.25 h-auto">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-tl-2xl rounded-bl-md h-full w-full"
                  />
                </div>
                <div className="bg-background_brand py-4 px-6 w-full">
                  <h2 className="text-base lg:text-lg font-semibold text-title_brand">
                    {blog.title}
                  </h2>
                  <h4 className="mt-4 font-semibold lg:text-base text-sm">
                    By {blog.ownerName}
                  </h4>
                  <p className="text-[#959595] text-[12px] lg:text-sm font-medium mt-2">
                    {blog.date} · <span>{blog.readDuration}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Categories />
    </div>
  );
}

export default Blog;
