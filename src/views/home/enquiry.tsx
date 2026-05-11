import React from "react";
import Image from "next/image";
import Container from "@/components/container";

type StepsDataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  steps: {
    number: string;
    title: string;
    text: string;
  }[];
};

export default function Enquiry({ data }: { data: StepsDataProps }) {
  return (
    <section className="w-full bg-white py-10 sm:py-20 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="max-w-[740px]">
          <span className="text-green text-[10px] sm:text-base font-primary font-semibold tracking-[0.08em] uppercase">
            {data.label}
          </span>

          <h2 className="mt-2 font-primary text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-[1.08]">
            {data.title.before}{" "}
            <span className="font-tertiary sadg text-green font-normal leading-none">
              {data.title.highlight}
            </span>
          </h2>
        </div>

        <style>{`
          .sadg {
            font-family: 'Sedgwick Ave';
          }
       
        `}</style>

        {/* Steps */}
    {/* Steps */}
<div className="mt-14 lg:mt-16 relative">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 sm:gap-5 lg:gap-6 xl:gap-8 relative 
  max-w-[280px] sm:max-w-[720px] lg:max-w-full sm:max-w-full mx-auto">
    
    {data.steps.map((step, index) => (
      <div
        key={index}
        className="relative flex justify-center lg:justify-start"
      >
        {/* Connector */}
      

{/* Connector Logic */}
{index !== data.steps.length - 1 && (
  <div
    className={`absolute 
      /* Mobile: Vertical Arc centered between boxes */
      /* Use z-0 but ensure translate-y pushes it out from under the card */
      z-0 top-[100%] left-1/2 -translate-x-1/2 -translate-y-6
      w-[113px] h-[40px] block 
      
      /* Tablet (md): Hide Arcs */
      md:hidden 
      sm:hidden
      /* Desktop (lg): Horizontal Wave between cards */
      lg:block lg:top-1/2 lg:-right-[82px] lg:left-auto lg:translate-x-0 lg:-translate-y-1/2 
      lg:w-[110px] lg:h-[14px]
    `}
  >
    <svg
      viewBox="0 0 60 20"
      className=" lg:w-full h-full object-contain overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10 Q 15 0, 30 10 T 60 10" 
        stroke="#2BB673" 
        strokeWidth="3" 
        strokeLinecap="round"
        /* Mobile: Rotate to be vertical; Desktop: horizontal wave */
        className="rotate-90 lg:rotate-0 transition-all duration-300 origin-center scale-65 lg:scale-150 lg:scale-100"
      />
    </svg>
  </div>
)}
        {/* Card */}
        <div
          className="
            relative z-10
            w-full
            rounded-[20px]
            border border-[#CFE9DA]
            bg-[#F0F9F4]
          px-4 pt-7 pb-5
min-h-[150px]
sm:min-h-[175px]
lg:min-h-[220px]
            text-center
            flex flex-col items-center
            shadow-sm
          "
        >
          {/* Number */}
          <div
            className="
              absolute -top-4 -left-1
              w-10 h-10
              rounded-full
              bg-[#2BB673]
              text-white
              flex items-center justify-center
              text-[18px]
              font-bold
              sadg
              shadow-sm
            "
          >
            {step.number}
          </div>

          <h3 className="font-primary text-black text-sm sm:text-base font-bold leading-tight mt-2">
            {step.title}
          </h3>

          <p className="mt-3 font-primary text-sm sm:text-base font-normal leading-relaxed text-black">
            {step.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      </Container>
    </section>
  );
}