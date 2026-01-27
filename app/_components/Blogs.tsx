import { blogs } from "@/lib/data";
function Blogs() {
  console.log(blogs);
  return (
    <div className="container mx-auto lg:py-12 py-6">
      <div className="flex  flex-col items-center gap-1">
        <h4>
          <span className="bg-white text-hero-secondary rounded-full px-5 py-2 ">
            Insights
          </span>
        </h4>
        <h2 className="lg:text-[56px] font-semibold text-xl">From Our Blog</h2>
        <p className="text-center text-hero-secondary text-sm">
          Practical tips, insights, and guides to help you grow your online and
          <span className="lg:block inline">retail business.</span>
        </p>
      </div>
    </div>
  );
}

export default Blogs;
