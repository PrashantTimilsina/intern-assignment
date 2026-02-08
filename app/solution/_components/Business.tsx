import { Button } from "@/components/ui/button";
import { businessData } from "@/lib/data";

function Business() {
  return (
    <div className="bg-background_brand lg:mt-25 mt-6 py-6 px-4 lg:py-25 ">
      <div className="container">
        <div className="text-center lg:space-y-6 max-lg:px-2.5 space-y-3">
          <h3 className="lg:text-4xl font-semibold text-xl">
            How Businesses Use Our{" "}
            <span className="block lg:inline">Platform Every Day</span>
          </h3>
          <p className="text-sm lg:text-base text-logo-text ">
            Powerful tools designed to solve real problems for online stores,
            POS{" "}
            <span className="lg:block inline">
              shops, and multi-channel sellers.
            </span>
          </p>
        </div>
        <div className="grid lg:grid-cols-4 lg:gap-6 mt-6 grid-cols-2 gap-4">
          {businessData.map((el, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl space-y-6 ">
              <el.icon className="lg:w-16.5 lg:h-16.5 h-11 w-11" />

              <h2 className="text-base lg:text-lg font-semibold text-title_brand">
                {el.title}
              </h2>
              <h2 className="max-lg:text-sm text-body-text_brand">
                {el.subtitle}
              </h2>
            </div>
          ))}
        </div>
        <Button className="bg-secondary_brand text-[#F8FCFF] lg:hidden w-full py-2 px-4 mt-6 hover:bg-secondary_hover_brand">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Business;
