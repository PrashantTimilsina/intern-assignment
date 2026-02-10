import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  blog: {
    image: StaticImageData;
    title: string;
    subtitle: string;
    ownerImage: StaticImageData;
    ownerName: string;
    date: string;
    readDuration: string;
  };
  location: string;
}

function BlogCard({ blog, location }: BlogCardProps) {
  return (
    <div
      className={`rounded-md rounded-tl-2xl rounded-tr-2xl  flex flex-col gap-2 pb-3   max-lg:shrink-0 ${location === "Homepage" ? "bg-white max-lg:w-[85%]" : "bg-background_brand max-lg:w-full"}`}
    >
      <div className="relative h-44 w-full ">
        <Image
          src={blog.image}
          alt="Blog image"
          className="rounded-tl-2xl rounded-tr-2xl h-72.5 w-full object-cover"
          height={284}
          width={426}
        />

        <span className="absolute z-40 top-4 left-5 text-white bg-white/10 backdrop-blur-xl px-6 py-2 rounded-full text-sm font-medium border-2 border-t-white/30 border-l-white/75 border-b-white/30 border-r-white/75 shadow-lg">
          Stay In Sync
        </span>
      </div>
      <h2 className="mt-28 text-hero-primary font-semibold py-2 px-4 text-lg lg:whitespace-pre-line">
        {blog.title}
      </h2>
      <h4 className="py-2 px-4 text-sm lg:text-base text-blog-subtitle text-body-text_brand">
        {blog.subtitle}
      </h4>
      <div className="flex gap-4 py-2 px-4">
        <div>
          <Image
            src={blog.ownerImage}
            alt="Owner Image"
            className="h-15 w-15 overflow-hidden rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-title_brand font-semibold">{blog.ownerName}</h3>
          <p className="text-[#959595]">
            {blog.date} · <span>{blog.readDuration}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
