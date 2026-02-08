import { sellerData } from "@/lib/data";
import Image from "next/image";
function Card() {
  return (
    <div className="flex gap-4 container lg:mt-25 mt-6 max-lg:overflow-x-auto max-lg:px-4 no-scrollbar">
      {sellerData.map((el, i) => (
        <div
          key={i}
          className="bg-background_brand py-6 px-4 rounded-2xl flex flex-col gap-3 max-lg:w-[320px] max-lg:shrink-0"
        >
          <h3 className="text-xl font-semibold">{el.title}</h3>
          <p className="text-base text-logo-text">{el.solution}</p>
          <div className=" h-46.5 w-full mt-18 rounded-lg">
            <Image
              src={el.image}
              alt="Seller image"
              height={186}
              width={288}
              className="h-full w-full object-cover rounded-2xl "
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
