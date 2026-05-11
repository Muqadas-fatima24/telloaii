'use client'

import React, { useState } from 'react';
import Container from "@/components/container";
import Image from "next/image";

export interface Feature {
  title: string;
  desc: string;
  icon: string;
}

export interface DentistrySectionProps {
  data: {
    label: string;
    title: {
      dark: string;
      highlight: string;
    };
    description: string;
    features: Feature[];
  };
}

export default function Built({ data }: { data: DentistrySectionProps['data'] }) {
  // Logic: First box is active by default (index 0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F7F9FB] py-10 sm:py-20">
      <Container>
        <div>
          
          {/* Header Section */}
          <div className="text-left sm:text-center max-w-[750px] mx-auto  mb-7 sm:mb-16">
            <p className="font-secondary text-green text-sm text-[10px] sm:text-base font-semibold  tracking-widest uppercase">
              {data.label}
            </p>
            <h2 className="md:mt-6 sm:mt-4 mt-2 font-primary  text-black  text-[18px] sm:text-[32px] md:text-h2 font-bold  leading-[1.41]">
              {data.title.dark}{" "}
              <span className="font-tertiary sadg text-green font-normal block lg:inline">
                {data.title.highlight}
              </span>
            </h2>
            <p className="md:mt-8 sm:mt-4 mt-2 font-primary text-[10px] sm:text-sm md:text-base text-left  sm:text-center text-black   leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Features Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.features.map((feature: Feature, index: number) => {
              // Same logic: item is active if hovered OR if nothing is hovered and it's the first one
              const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0);

              return (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`bg-white sm:p-6 p-4 md:p-8 lg:p-10 rounded-[20px] transition-all duration-300 border cursor-pointer
                    ${
                      isActive 
                        ? "border-[#A7DECA] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.08)]" 
                        : "border-[#3E595A33] shadow-none"
                    }
                  `} 
                >
                  {/* Icon Container - Changes background based on isActive */}
                  <div className={` w-9 h-9 sm:w-12 sm:h-12 rounded-[10px] flex items-center justify-center mb-4 transition-all duration-300
                  bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)]
                  `}>
                    <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                      <Image 
                        src={feature.icon} 
                        fill 
                        alt={feature.title} 
                        className={`object-contain transition-all duration-300 
                      
                        `} 
                      />
                    </div>
                  </div>

                  <h3 className="font-primary text-black text-sm sm:text-base font-bold mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-secondary text-sm sm:text-base font-normal text-black leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
        {/* <style jsx>{`
          .sadg { font-family: 'Sedgwick Ave', cursive; }
          .text-green { color: #27B17E; }
        `}</style> */}
      </Container>
    </section>
  );
}