// "use client";
// import {
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
//   Accordion,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { FAQData } from "@/lib/data";
// import { ArrowUpRight } from "lucide-react";

// function FAQ() {
//   // const [clickedIndex, setClickedIndex] = useState<number | null>(0);

//   return (
//     <div className="container  flex flex-col items-center lg:py-25 py-6 ">
//       {/* <Accordion
//         type="single"
//         collapsible
//         defaultValue="shipping"
//         className="lg:w-1/2 w-full cursor-pointer"
//       >
//         {FAQData.map((el, i) => (
//           <AccordionItem key={i} value={el.title}>
//             <AccordionTrigger
//               icon={<ArrowUpRight />}
//               className="[&[data-state=open]>[data-accordion-icon]]:rotate-90 cursor-pointer"
//             >
//               {el.title}
//             </AccordionTrigger>
//             <AccordionContent>{el.subtitle}</AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion> */}
//       <h1 className="lg:text-[56px] font-semibold text-xl">
//         Frequently asked questions
//       </h1>
//       <div className="flex flex-col gap-5 w-full items-center max-lg:px-4 mt-10">
//         {/* {FAQData.map((el, i) => (
//           <div
//             key={i}
//             onClick={() => setClickedIndex(clickedIndex === i ? null : i)}
//             className=" bg-background_brand lg:w-1/2 lg:p-6 rounded-md flex flex-col gap-4 w-full p-4 cursor-pointer"
//           >
//             <div className="flex justify-between">
//               <h3 className="text-lg font-semibold">{el.title}</h3>
//               {clickedIndex == i ? (
//                 <ArrowDownRight
//                   size={22}
//                   onClick={() => setClickedIndex(null)}
//                   className="cursor-pointer"
//                 />
//               ) : (
//                 <ArrowUpRight
//                   size={22}
//                   onClick={() => setClickedIndex(i)}
//                   className="cursor-pointer"
//                 />
//               )}
//             </div>
//             {clickedIndex == i && (
//               <p className="text-body-text_brand">{el.subtitle}</p>
//             )}
//           </div>
//         ))} */}
//         <Accordion
//           type="single"
//           collapsible
//           defaultValue="Do I need technical skills to use this platform?"
//           className="lg:w-187.5 w-full cursor-pointer    rounded-md flex flex-col gap-2 lg:gap-4   "
//         >
//           {FAQData.map((el, i) => (
//             <AccordionItem
//               key={i}
//               value={el.title}
//               className="bg-background_brand  lg:rounded-2xl rounded-lg "
//             >
//               <AccordionTrigger
//                 icon={<ArrowUpRight />}
//                 className="[&[data-state=open]>[data-accordion-icon]]:rotate-90 cursor-pointer text-base lg:text-lg font-semibold text-title_brand px-6 pt-6 [data-state=open]:py-0 [data-state=open]:pt-0"
//               >
//                 {el.title}
//               </AccordionTrigger>
//               <AccordionContent className="text-body-text_brand text-sm lg:text-base py-4 px-6">
//                 {el.subtitle}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//       <div className="flex flex-col items-center  max-lg:mt-4 max-lg:px-4  mt-4 lg:mt-8">
//         <h1 className="lg:text-2xl font-semibold text-base text-title_brand">
//           Still have a questions?
//         </h1>
//         <p className="text-sm mt-2 text-body-text_brand">
//           If you cannot find answer to your question in our FAQ, you can{" "}
//           <span className="lg:block inline">
//             always{" "}
//             <span className=" font-semibold text-secondary_brand">
//               contact us
//             </span>
//             . We will answer to you shortly
//           </span>
//         </p>
//         <Button className="cursor-pointer max-lg:w-full max-lg:py-6 mt-8 ">
//           Contact Us
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default FAQ;
"use client";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

function FAQ() {
  return (
    <div className="container flex flex-col items-center ">
      <h1 className="lg:text-[56px] font-semibold text-xl">
        Frequently asked questions
      </h1>
      <div className="flex flex-col gap-5 w-full items-center max-lg:px-4 mt-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="Do I need technical skills to use this platform?"
          className="lg:w-187.5 w-full cursor-pointer rounded-md flex flex-col gap-2 lg:gap-4"
        >
          {FAQData.map((el, i) => (
            <AccordionItem
              key={i}
              value={el.title}
              className="bg-background_brand lg:rounded-2xl rounded-lg py-2.5  "
            >
              <AccordionTrigger
                icon={<ArrowUpRight />}
                className="[&[data-state=open]>[data-accordion-icon]]:rotate-90 cursor-pointer text-base lg:text-lg font-semibold text-title_brand px-4 py-2  [data-state=open]:py-2 hover:no-underline"
              >
                {el.title}
              </AccordionTrigger>
              <AccordionContent className="text-body-text_brand text-sm lg:text-base py-2 px-4">
                {el.subtitle}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="flex flex-col items-center max-lg:mt-4 max-lg:px-4 mt-4 lg:mt-8">
        <h1 className="lg:text-2xl font-semibold text-base text-title_brand">
          Still have a questions?
        </h1>
        <p className="text-sm mt-2 text-body-text_brand">
          If you cannot find answer to your question in our FAQ, you can{" "}
          <span className="lg:block inline">
            always{" "}
            <span className="font-semibold text-secondary_brand">
              contact us
            </span>
            . We will answer to you shortly
          </span>
        </p>
        <Button className="cursor-pointer max-lg:w-full max-lg:py-6 mt-8">
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default FAQ;
