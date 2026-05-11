'use client'
import { useState } from 'react';
import React from 'react';
import { MoveRight } from 'lucide-react';
import Button from '@/components/button';
import Container from '@/components/container';
import Link from 'next/link';

export type QuestionItem = {
  number: string;
  question: string;
  subtext: string;
};

export type LeadLossSectionProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  description: string;
  buttonText: string;
  questions: QuestionItem[];
};


export default function Question({ data }: { data: LeadLossSectionProps }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="w-full bg-white py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 gap-6 md:gap-12 lg:gap-20 items-start">
          
          {/* Left Content Column */}
          <div className="flex flex-col">
            <span className="font-secondary text-green text-[10px] sm:text-base font-semibold tracking-normal uppercase">
              {data.label}
            </span>
            
            <h2 className="mt-3 font-primary max-w-[415px] text-black  text-[18px] sm:text-[32px] md:text-h2 font-bold leading-[1.41]">
              {data.title.before}{" "}
              <span className="font-tertiary text-green font-normal block md:inline sadg">
                {data.title.highlight}
              </span>
            </h2>
            
            <p className="sm:mt-4 mt-2 font-secondary text-black text-[10px] sm:text-sm md:text-base max-w-[550px]">
              {data.description}
            </p>
            <Link href='/'> 
            <Button variant='question' className="!bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)] md:mt-10! sm:mt-6! mt-3! w-fit bg-green  text-white! whitespace-nowrap hover:text-white/70! cursor-pointer font-secondary font-bold py-3!  md:py-5! px-3! sm:px-4! md:px-8! sm:mt-3 text-sm sm:text-base rounded-[15px] transition-all ">
              {data.buttonText}
            </Button>
            </Link>

          </div>

          {/* Right Questions Column */}
      <div 
        className="flex flex-col gap-2 sm:gap-4"
        // When mouse leaves the whole area, it defaults back to the first box
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {data.questions.map((item, index) => {
          // Matches your Practice component logic: 
          // Active if hovered OR if nothing is hovered and it's the first one
          const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0);

          return (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`transition-all duration-300 group flex items-center justify-between p-6 lg:p-8 bg-white rounded-[20px] cursor-pointer border
                ${
                  isActive 
                    ? "border-[#A7DECA] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.08)]" 
                    : "border-[#3E595A33] shadow-none"
                }
              `}
            >
              <div className="flex items-center gap-6 lg:gap-8">
                {/* Styled Number */}
                <span className={`font-tertiary text-green sadg text-base sm:text-h4 md:text-h3 transition-colors duration-300`}>
                  {item.number}
                </span>
                
                <div>
                  <h3 className="font-primary text-black text-[10px] sm:text-sm md:text-base font-medium leading-tight">
                    {item.question}
                  </h3>
                  <p className="mt-1 font-[400] font-primary text-black font-normal text-[10px] sm:text-sm md:text-base uppercase tracking-wide">
                    {item.subtext}
                  </p>
                </div>
              </div>
              
              {/* Arrow Icon - Moves only when active */}
              <MoveRight 
                className={`sm:w-8 sm:h-8 w-4 h-4   transition-all duration-300 ${
                  isActive ? "text-green translate-x-2" : "text-[#3E595A33]"
                }`} 
                size={24} 
              />
            </div>
          );
        })}
      </div>


        </div>
      </Container>
    </section>
  );
}