import { blogs } from "@/lib/data";
import Image from "next/image";
function Blogs() {
  return (
    <div className="container  ">
      <div className="flex  flex-col items-center gap-1 max-lg:px-4">
        <h4>
          <span className="bg-white text-body-text_brand rounded-full px-5 py-2 text-[12px]">
            Insights
          </span>
        </h4>
        <h2 className="lg:text-[56px] font-semibold text-xl max-lg:mt-3">
          From Our Blog
        </h2>
        <p className="text-center text-body-text_brand lg:text-xl text-sm">
          Practical tips, insights, and guides to help you grow your online and
          <span className="lg:block inline"> retail business.</span>
        </p>
      </div>
      <div className="flex gap-4 mt-5 max-lg:overflow-x-scroll max-lg:px-2 no-scrollbar">
        {blogs.map((el, i) => (
          <div
            key={i}
            className="rounded-md bg-white flex flex-col gap-2 pb-3  max-lg:w-[85%] max-lg:shrink-0"
          >
            <div className="relative h-44 w-full ">
              <Image
                src={el.image}
                alt="Blog image"
                className="rounded-md h-72.5 w-full object-cover"
                height={284}
                width={426}
              />

              <span className="absolute z-40 top-4 left-5 text-white bg-white/10 backdrop-blur-xl px-6 py-2 rounded-full text-sm font-medium border-2 border-t-white/30 border-l-white/75 border-b-white/30 border-r-white/75 shadow-lg">
                Stay In Sync
              </span>
            </div>
            <h2 className="mt-28 text-hero-primary font-semibold py-2 px-4 text-lg lg:whitespace-pre-line">
              {el.title}
            </h2>
            <h4 className="py-2 px-4 text-sm lg:text-base text-blog-subtitle text-body-text_brand">
              {el.subtitle}
            </h4>
            <div className="flex gap-4 py-2 px-4">
              <div>
                <Image
                  src={el.ownerImage}
                  alt="Owner Image"
                  className="h-15 w-15 overflow-hidden rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-title_brand font-semibold">
                  {el.ownerName}
                </h3>
                <p className="text-[#959595]">
                  {el.date} · <span>{el.readDuration}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
