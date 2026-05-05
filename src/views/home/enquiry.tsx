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
    <section className="w-full bg-white py-20 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="max-w-[740px]">
          <span className="text-green text-base font-primary font-semibold tracking-[0.08em] uppercase">
            {data.label}
          </span>

          <h2 className="mt-2 font-primary text-black text-[32px] md:text-h2 font-bold leading-[43px]">
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
<div className="mt-12 relative">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    {data.steps.map((step, index) => (
      <div key={index} className="relative group">
        {/* Number bubble */}
        <div className="absolute sadg -top-4 -left-3 z-30 w-12 h-12 rounded-full bg-[#2BB673] text-white text-[20px] font-bold flex items-center justify-center shadow-sm italic">
          {step.number}
        </div>

        {/* Image Connector (LG screens only) */}
      {/* Image Connector (LG screens only) */}
{/* Image Connector (LG screens only) */}
{/* Image Connector (LG screens only) */}
{index !== data.steps.length - 1 && (
  <div className="hidden lg:block absolute top-1/2 -right-[40px] w-[40px] h-[20px] z-20 -translate-y-1/2">
    <Image
      src="/arc.png" 
      width={160} // Increased for high-density (Retina) displays
      height={80}  // Increased for high-density (Retina) displays
      alt="connector" 
      quality={100} // Ensures Next.js doesn't compress it too much
      className="w-full h-auto object-contain" // object-contain is crisper than object-fill
    />
  </div>
)}

        {/* Card Styling - Fixed Height */}
        <div className="relative z-10 text-center rounded-[20px] border border-[#CFE9DA] bg-[#F0F9F4] pt-7 px-4 pb-6 h-[270px] flex flex-col items-center text-center overflow-hidden">
          <h3 className="font-primary text-black text-base font-bold leading-tight">
            {step.title}
          </h3>

          <p className="mt-4 font-primary text-base text-black leading-relaxed overflow-y-auto">
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