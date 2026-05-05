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
  stats: RevenueStat[];
  buttonText: string;
};

import Container from '@/components/container';
import React from 'react';

export default function Recovery({ data }: { data: RevenueRecoveryProps }) {
  return (
    <section className="relative w-full bg-back1 py-20 lg:py-28 overflow-hidden">
      {/* Background Image/Grid Layer */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/grid-bg.png" // Ensure you have the grid pattern image from image_1d3a01.png
          alt="background grid" 
          className="w-full h-full object-cover"
        />
      </div>
<Container>
      <div className="relative z-10 m px-6 flex flex-col items-center text-center">
        
        {/* Label */}
        <span className="font-primary text-green text-base font-semibold tracking-[0.2em] uppercase">
          {data.label}
        </span>

        {/* Main Heading */}
        <h2 className="mt-4 font-primary text-white text-h2 md:text-h1 font-bold leading-[63px] max-w-[847px]">
          {data.title.before} {" "}
          <span className="font-tertiary sadg text-green normal-case font-normal">
            {data.title.highlight}
          </span>
        </h2>

        {/* Description */}
        <p className="mt-8 font-primary text-white/80 text-base md:text-h4 font-light leading-relaxed max-w-[850px]">
          {data.description}
        </p>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px] mt-6">
          {data.stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-back2 rounded-[20px] py-10 px-6 border border-border shadow-2xl"
            >
              <h3 className="font-primary text-green text-h3 font-bold">
                {stat.value}
              </h3>
              <p className="mt-2 font-primary text-white text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-16 bg-green hover:bg-green/90 text-white font-primary font-bold py-5 px-12 rounded-xl transition-all active:scale-95 text-base lg:text-h4 shadow-xl shadow-green/20">
          {data.buttonText}
        </button>

      </div>
</Container>
    </section>
  );
}