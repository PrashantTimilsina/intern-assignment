import SolutionImage from "./../assets/solution.png";
import Image from "next/image";
import ImgScroll from "../_components/ImgScroll";
import Card from "./_components/Card";
import Business from "./_components/Business";
import Industries from "./_components/Industries";
function Solution() {
  return (
    <div>
      <div className=" bg-linear-to-r from-[#706fbd] to-primary_brand lg:py-16 py-8">
        <div>
          <div className="container flex  items-center lg:flex-row flex-col justify-between">
            <div className="text-white   flex flex-col lg:gap-4 max-lg:text-center gap-2 max-w-153.75">
              <h1 className="lg:text-[64px]/[1.2] font-semibold text-xl">
                Solutions built for
                <span className="lg:block inline">every type of seller</span>
              </h1>
              <p className="lg:text-2xl text-sm">
                Whether you sell online, in-store, or across multiple <br />
                channels — we help you run your business smoothly.
              </p>
            </div>
            {/*second div*/}
            <div className="flex  max-lg:w-full max-w-[713px]">
              <Image
                src={SolutionImage}
                alt="Solution"
                height={459}
                width={713}
                className="lg:h-114.75 w-full object-contain pl-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background_brand py-6 max-lg:px-4">
        <ImgScroll />
      </div>

      <Card />

      <Business />
      <Industries />
    </div>
  );
}

export default Solution;
