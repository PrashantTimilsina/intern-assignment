import Image from "next/image";
import IndustryImageOne from "./../../assets/Industry1.jpg";
import IndustryImageTwo from "./../../assets/Industry2.jpg";
import IndustryImageThree from "./../../assets/Industry3.jpg";
import IndustryImageFour from "./../../assets/Industry4.jpg";
function Industries() {
  const data = [
    { title: "Fashion", src: IndustryImageOne },
    { title: "Technology", src: IndustryImageTwo },
    { title: "Healthcare", src: IndustryImageThree },
    { title: "Education", src: IndustryImageFour },
  ];
  return (
    <div className="container lg:py-25 pt-6 lg:space-y-18 space-y-6">
      <div className="flex justify-between lg:flex-row flex-col  max-lg:gap-2 max-lg:text-center">
        <h2 className="text-title_brand lg:text-[56px] font-semibold text-xl ">
          Industries We Support
        </h2>
        <p className="text-body-text_brand lg:text-xl text-sm max-lg:px-1.5">
          From apparel brands to local shops, our platform gives{" "}
          <span className="lg:block inline">
            every seller the tools they need to operate smoothly.
          </span>
        </p>
      </div>
      <div className="flex gap-6 overflow-x-auto no-scrollbar max-lg:px-4">
        {data.map((el, i) => (
          <div
            key={i}
            className=" lg:h-106.25 lg:min-w-[384px] relative flex justify-center min-w-75 h-106.25  "
          >
            <Image
              src={el.src}
              alt={el.title}
              height={425}
              width={384}
              className="h-full w-full object-cover rounded-2xl "
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_32.75%,#000_109.18%)] rounded-2xl" />
            <span className="absolute bottom-6 text-white text-lg font-semibold">
              {el.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
