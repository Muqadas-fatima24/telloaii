export type RevenueStat = {
  value: string;
  label: string;
};

export type RevenueRecoveryProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  stats?: RevenueStat[];
  buttonText ?: string;
  buttonText1 ?: string;
  buttonText2 ?: string;
  botPara ?: string;
};

import Container from '@/components/container';
import React from 'react';
import Button from '@/components/button';
import Link from 'next/link';

export default function Recovery({ data }: { data: RevenueRecoveryProps }) {
  return (
    <section className="relative w-full bg-back1 py-10 lg:py-20 overflow-hidden">
      {/* Background Image/Grid Layer */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/grid-bg.png" // Ensure you have the grid pattern image from image_1d3a01.png
          alt="background grid" 
          className="w-full h-full object-cover"
        />
      </div>
<Container>
      <div className="relative z-10 m sm:px-6 px-3 flex flex-col items-center text-center">
        
        {/* Label */}
        <span className="font-primary text-green sm:text-base  text-sm font-semibold tracking-[0.2em] uppercase">
          {data.label}
        </span>

        {/* Main Heading */}
        <h2 className="mt-4 font-primary text-white text-[18px] sm:text-h3 md:text-h1 font-bold sm:leading-[55px] sm:leading-[63px] max-w-[847px]">
          {data.title.before} {" "}
          <span className="font-tertiary sadg text-green normal-case font-normal">
            {data.title.highlight}
          </span>
        </h2>

        {/* Description */}
        <p className="mt-8 font-primary text-white  text-sm sm:text-base md:text-base font-normal leading-[23px] sm:leading-[33px] max-w-[740px]">
          {data.description}
        </p>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-6 gap-3 sm:w-full w-[55%] max-w-[740px]  mt-6">
          {data.stats?.map((stat, index) => (
            <div 
              key={index} 
              className="bg-back2 rounded-[5px] sm:rounded-[20px] sm:py-6 sm:px-6 py-3 px-3 border border-border"
            >
              <h3 className="font-primary text-[#2ABD83] text-base sm:text-h3 font-bold">
                {stat.value}
              </h3>
              <p className="mt-2 font-primary text-white text-sm font-normal uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {data.buttonText &&
        <Link href='/'>
          <Button className="md:mt-16  sm:mt-8 mt-6 font-secondary font-semibold  bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)] text-white sm:py-5 sm:px-12 py-2.5 px-6 rounded-[5px]! sm:rounded-[15px]! sm:text-base text-sm ">
          {data.buttonText}
        </Button>
        </Link>
        }
       <div className='flex flex-col justify-center items-center'>
         <div className="flex justify-center sm:justify-start sm:mt-5 sm:mb-2 mt-2 mb-2 sm:flex-wrap items-center gap-2 sm:gap-4">
     {
      data.buttonText1 &&
      
            <Link href='/'>
            <Button className="text-sm hover:text-white/80 transition duration-300 bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)]  sm:text-base text-white !rounded-[5px] font-semibold !px-4 !py-2 sm:!px-9 sm:!py-3.5 sm:!rounded-[15px]">
             {data.buttonText1}
            </Button>
          </Link>
     }
     {/* bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)] */}
     {
      data.buttonText2 && 
          <Link href='/'>
            <Button className=" text-sm border hover:text-white/80 transition duration-300 bg-green/12 border border-white sm:text-base text-white !rounded-[5px] font-semibold !px-4 !py-2 sm:!px-9 sm:!py-3.5 sm:!rounded-[15px]">
             {data.buttonText2}
            </Button>
          </Link>
     }

        </div>

     {
      data.botPara && 
       <p className="mt-8 font-primary text-white  text-sm mt-3 sm:mt-7 sm:text-sm md:text-sm font-normal leading-[23px] sm:leading-[33px] max-w-[740px]">
          {data.botPara}
        </p>
     }
</div>
      </div>
</Container>
    </section>
  );
}