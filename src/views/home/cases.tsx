"use client";

import Container from "@/components/container";
import { useState } from "react";
import Image from "next/image";



export type UseCaseCard = {
  title: string;

  text: string;
  src: string; // Icon path
};

export type UseCaseProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
    description?:string;
  cards: UseCaseCard[];
};

export default function Cases({ data }: { data: UseCaseProps }) {
    const [activeCard, setActiveCard] = useState(0);
  return (
    <section className="w-full bg-[#F7F9FB] py-10 md:py-20">
      <Container>
        <Container>
          
          {/* Heading Section */}
          <div className="mb-16">
            <span className="font-primary text-green text-[10px] sm:text-base  font-semibold tracking-widest uppercase">
              {data.label}
            </span>
            <h2 className="mt-4 font-primary text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-tight max-w-[645px]">
              {data.title.before}{" "}
              <span className="font-tertiary sadg text-green font-normal">
                {data.title.highlight}
              </span>
            </h2>

             <p className="mt-2 sm:mt-4 text-black sm:hidden block text-sm sm:text-base leading-relaxed font-primary max-w-[815px]">
            {data.description}
          </p>
          </div>

          {/* Cards Grid */}
{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
  {data.cards.map((card, index) => {
    const isActive = activeCard === index;

    return (
      <div
        key={index}
        onMouseEnter={() => setActiveCard(index)}
        className={`group flex gap-3 p-6 pb-4 rounded-[20px] border border-[#CFE9DA] cursor-pointer transition-all duration-300 min-h-[155px]
          ${
            isActive
              ? "bg-[#F7F9FB]"
              : "bg-white"
          }`}
      >
        {/* Icon Container */}
        {/* <div
          className={`w-30 h-10 rounded-[14px] flex items-center justify-center transition-colors
            ${isActive ? "bg-green" : "bg-[#F7F9FB]"}`}
        >
          <Image
            src={card.src}
            width={20}
            height={20}
            alt={card.title}
            className={`object-contain transition-all
              ${isActive ? "brightness-0 invert" : ""}`}
          />
        </div> */}

        {/* Text Content */}
        {/* <div>
          <h4 className="font-primary text-black text-base font-bold leading-snug">
            {card.title}
          </h4>
          <p className="mt-3 font-primary text-black text-sm leading-relaxed">
            {card.text}
          </p>
        </div>
      </div>
    );
  })}
</div>  */}










<div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
  onMouseLeave={() => setActiveCard(0)}
>
  {data.cards.map((card, index) => {
    const isActive = activeCard === index;

    return (
      <div
        key={index}
        onMouseEnter={() => setActiveCard(index)}
        className={`group flex gap-3 p-6 pb-4 rounded-[20px] border cursor-pointer transition-all duration-300 min-h-[155px]
          ${
            isActive
              ? "border-[#A7DECA] shadow-[0_4px_30px_rgba(0,0,0,0.15)] bg-[#F7F9FB]"
              : "border-[#3E595A33] bg-white"
          }
        `}
      >
        {/* Icon Container */}
        <div
          className={`md:w-34 md:h-11 w-25 h-10 rounded-[5px] sm:rounded-[14px] flex items-center justify-center transition-colors duration-300
            ${
              isActive
               ? "bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)]"
                : "bg-[#F7F9FB]"
            }
          `}
        >
          <Image
            src={card.src}
            width={20}
            height={20}
            alt={card.title}
            className={`w-[20px] h-auto object-contain transition duration-300
              ${isActive ? "brightness-0 invert" : ""}
            `}
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="font-primary text-black text-sm sm:text-base font-bold  leading-snug">
            {card.title}
          </h4>
          <p className="mt-3 font-primary text-black  leading-relaxed text-sm sm:text-base">
            {card.text}
          </p>
        </div>
      </div>
    );
  })}
</div>













        </Container>
      </Container>
    </section>
  );
}