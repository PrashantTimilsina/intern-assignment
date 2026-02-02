import DHL from "./../assets/DHL.png";
import Aramex from "./../assets/Aramex.png";
import Stripe from "./../assets/Stripe.png";
import Paypal from "./../assets/Paypal.png";
import Image from "next/image";
const data = [
  {
    title: "DHL",
    description:
      "Fast global shipping with real-time tracking and reliable delivery services.",
    icon: DHL,
  },
  {
    title: "Aramex",
    description:
      "Worldwide courier support with label printing and shipment updates.",
    icon: Aramex,
  },
  {
    title: "Stripe",
    description:
      "Secure global payments with support for cards, wallets, and subscriptions.",
    icon: Stripe,
  },
  {
    title: "Paypal",
    description:
      "Trusted worldwide for quick checkouts, refunds, and business payments.",
    icon: Paypal,
  },
  {
    title: "Stripe",
    description:
      "Secure global payments with support for cards, wallets, and subscriptions.",
    icon: Stripe,
  },
];
function Tools() {
  return (
    <div className="container  text-center">
      <div className="space-y-3 px-2">
        <h3 className="text-center">
          <span className="bg-white px-6 py-2 rounded-full text-hero-secondary">
            Integrations & Workflow
          </span>
        </h3>
        <h1 className="lg:text-3xl font-semibold text-2xl px-2">
          Works Seamlessly With the
          <span className="lg:block inline"> Tools You Already Use</span>
        </h1>
        <p className="text-hero-secondary text-sm max-lg:px-2">
          Connect your store with leading shipping partners, payment gateways,
          POS
          <span className="lg:block inline ">
            systems, and marketplaces — so everything stays in sync
            automatically.
          </span>
        </p>
      </div>
      <div className="flex gap-2 max-lg:overflow-x-auto mt-8 max-lg:px-4 max-lg:justify-center no-scrollbar">
        {data.map((el, i) => (
          <div
            key={i}
            className="flex flex-col gap-3  items-start p-4 text-left bg-white rounded-md max-lg:border "
          >
            <div className="relative lg:h-12 lg:w-12 h-8 w-9 lg:border rounded-md overflow-hidden">
              <Image
                src={el.icon}
                alt="Company logo"
                className="object-contain w-full h-full p-1 "
              />
            </div>
            <h1 className="font-semibold text-hero-primary text-xl max-lg:hidden">
              {el.title}
            </h1>
            <h4 className="text-hero-secondary max-lg:hidden">
              {el.description}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
