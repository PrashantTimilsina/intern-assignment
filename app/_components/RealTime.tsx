import Image from "next/image";
import Revenue from "./../assets/revenue.png";
import Customer from "./../assets/customer.png";
import Graph from "./../assets/Graph.png";

const dashboardCards = [
  {
    title: "Active Customers",
    description:
      "See how many customers are currently engaging with your store, browsing products, or placing new orders.",
    image: Customer,
    alt: "Active Customers Dashboard",
  },
  {
    title: "Today’s Revenue",
    description:
      "Track today’s total earnings in real time. Understand performance instantly without switching tabs.",
    image: Revenue,
    alt: "Today’s Revenue Dashboard",
  },
  {
    title: "Total Orders",
    description:
      "View the total number of orders placed across all channels — online store, POS, and social platforms.",
    image: Graph,
    alt: "Total Orders Dashboard",
  },
];

function RealTime() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between text-center lg:flex-row flex-col lg:text-base text-sm gap-4 mb-10">
        <h1 className="text-white font-semibold lg:text-4xl text-2xl">
          Get a Clear, Real-Time
          <span className="block">View of Your Business</span>
        </h1>

        <h3 className="flex-1 text-[#C2C3DA]">
          A smart, real-time dashboard that brings all your essential business
          <span className="lg:block inline">
            data together. Track sales, customers, orders, deliveries, and
            payouts
          </span>
          <span className="lg:block inline">
            instantly, giving you a complete and clear view of your store’s
          </span>
          performance in one place.
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <div key={index} className="rounded-2xl p-6 space-y-4  ">
            <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={card.image}
                alt={card.alt}
                width={400}
                height={250}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="text-sm text-[#C2C3DA]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealTime;
