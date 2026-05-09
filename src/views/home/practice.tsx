'use client'

import Container from '@/components/container';
import Image from 'next/image';
import { useState } from 'react'
import React from 'react'

type DataProps1 = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  description: string;
  cards: {
    title: string;
    text: string;
    src: {
      img: string;
      check: boolean;
    };
  }[];
};

export default function Practice({ data }: { data: DataProps1 }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-10 sm:py-20">
      <Container>
        <div>
          <span className="text-green font-primary text-[10px] sm:text-base font-semibold tracking-[0.08em] uppercase">
            {data.label}
          </span>

          <h2 className="mt-2 sm:mt-4 font-primary text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-[1.08] max-w-[710px]">
            {data.title.before}{" "}
            <span className="font-tertiary sadg text-green font-normal">
              {data.title.highlight}
            </span>
          </h2>

          <p className="mt-2 sm:mt-4 text-black text-sm sm:text-base leading-relaxed font-primary max-w-[815px]">
            {data.description}
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-12 cursor-pointer"> */}
<div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-12 cursor-pointer"
  onMouseLeave={() => setHoveredIndex(null)}
>
          {data.cards.map((card, index) => {
            const isActive =
              hoveredIndex === index || (hoveredIndex === null && index === 0);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
                className={`group rounded-[20px] border bg-white sm:p-8 p-6 transition-all duration-300
                  ${
                    isActive
                      ? "border-[#A7DECA] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
                      : "border-[#3E595A33]"
                  }
                `}
              >
                <div
                  className={`w-10 h-10 rounded-[5px] sm:rounded-[14px] flex items-center justify-center mb-6 transition-all duration-300
                    ${
                      isActive
                        ? "bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)]"
                        : "bg-[#E9F7F2]"
                    }
                  `}
                >
                  <Image
                    src={card.src.img}
                    width={20}
                    height={20}
                    alt="icon"
                    priority
                  className={`w-[20px] h-auto object-contain
                          ${isActive ? "brightness-0 invert" : ""}
b                       `}
                  />
                </div>

                <h3 className="font-primary text-black text-sm sm:text-base font-bold leading-snug">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base font-normal text-black leading-relaxed font-primary font-[400] sm:leading-[25px] leading-[20px]">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <style>{`
          .sadg {
            font-family: 'Sedgwick Ave';
          }
        `}</style>
      </Container>
    </section>
  );
}