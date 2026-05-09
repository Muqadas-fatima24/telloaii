import React from 'react';
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
  return (
    <section className="w-full bg-[#F7F9FB] py-20 lg:py-28">
      <Container>
        <div className="max-w-[1300px] mx-auto px-6">
          
          {/* Header Section */}
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <p className="font-secondary text-green text-sm font-bold tracking-widest uppercase">
              {data.label}
            </p>
            <h2 className="mt-6 font-primary text-black text-h2 md:text-display font-bold leading-[1.1]">
              {data.title.dark}{" "}
              <span className="font-tertiary text-green font-normal block lg:inline">
                {data.title.highlight}
              </span>
            </h2>
            <p className="mt-8 font-secondary text-text text-base md:text-[1.125rem] leading-relaxed opacity-80">
              {data.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {data.features.map((feature: Feature, index: number) => (
              <div 
                key={index}
                className="bg-white p-8 lg:p-10 rounded-[24px] shadow-sm transition-all hover:shadow-md"
                style={{ border: '1px solid #3E595A33' }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 bg-green rounded-xl flex items-center justify-center mb-8">
                  <div className="relative w-6 h-6">
                    <Image 
                      src={feature.icon} 
                      fill 
                      alt={feature.title} 
                      className="object-contain brightness-0 invert" 
                    />
                  </div>
                </div>

                <h3 className="font-primary text-black text-h4 font-bold mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-secondary text-text text-base leading-relaxed opacity-70">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}