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
  description?: string;
  cards: UseCaseCard[];
};

export default function Cases({ data }: { data: UseCaseProps }) {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="w-full bg-[#F7F9FB] py-10 md:py-20">
        <Container>
          {/* Heading Section */}
          <div className="md:mb-16 sm:mb-10 mb-8">
            <span className="font-primary text-green text-[10px] sm:text-base font-semibold tracking-[.08em] uppercase">
              {data.label}
            </span>
            <h2 className="mt-2 sm:mt-4 font-primary text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-tight max-w-[645px]">
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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 lg:mt-12  lg:gap-5"
            onMouseLeave={() => setActiveCard(0)}
          >
            {data.cards.map((card, index) => {
              const isActive = activeCard === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  className={`group flex gap-3  p-6 sm:p-8 rounded-[20px] w-full  border cursor-pointer transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "border-[#A7DECA] shadow-[0_4px_30px_rgba(0,0,0,0.15)] bg-white"
                        : "border-[#3E595A33] bg-white shadow-none"
                    }
                  `}
                >
                  {/* Icon Container */}
                  <div
                    className={`relative mb-3 sm:mb-6 w-10 md:h-10 md:w-12 sm:w-12 sm:h-10 h-9 rounded-[5px] sm:rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out
                      ${isActive ? "shadow-sm" : "bg-[#F7F9FB]"}
                    `}
                  >
                    {/* Background Gradient Layer (Fades in/out) */}
                    <div 
                      className={`absolute inset-0  bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)] transition-opacity duration-500 ease-in-out
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />

                    {/* Icon Image */}
                    <div className="relative z-10">
                      <Image
                        src={card.src}
                        width={20}
                        height={20}
                        alt={card.title}
                        className={`w-[20px] h-auto object-contain transition-all duration-500 ease-in-out
                          ${isActive ? "brightness-0 invert" : ""}
                        `}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="w-[80%]">
                    <h4 className="font-primary text-black text-sm sm:text-base font-bold leading-snug">
                      {card.title}
                    </h4>
                    <p className="mt-3 font-primary text-black leading-relaxed text-sm sm:text-base opacity-80">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
  
      <style jsx>{`
        .sadg { font-family: 'Sedgwick Ave', cursive; }
      `}</style>
    </section>
  );
}