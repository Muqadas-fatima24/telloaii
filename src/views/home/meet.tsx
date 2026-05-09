'use client'
import  { useState } from "react";
import Image from "next/image";
import Container from "@/components/container";
type SolutionDataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  cards: {
    title: string;
    text: string;
    featured?: boolean;
    src:string;
  }[];
};

export default function Solution({
  data,
}: {
  data: SolutionDataProps;
}) {
  const featuredCard = data.cards.find((card) => card.featured);
  const normalCards = data.cards.filter((card) => !card.featured);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
  
    <section className="w-full bg-[#F7F9FB] py-10 sm:py-20">
      <Container>
        {/* Heading */}
        <div className="text-primary max-w-[795px]">
          <span className="text-green  text-[10px] sm:text-base font-semibold tracking-[0.08em] uppercase">
            {data.label}
          </span>

          <h2 className="mt-3 font-primary text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-[1.08] max-w-[710px] md:max-w-[920px]">
            {data.title.before}{" "}
            <span className="font-tertiary sadg text-green font-normal leading-none">
              {data.title.highlight}
            </span>{" "}
            {data.title.after}
          </h2>

          <p className="mt-5 max-w-[920px] sm:max-w-[820px] text-black text-sm sm:text-base md:text-base leading-relaxed font-primary">
            {data.description}
          </p>
        </div>
<div onMouseLeave={() => setHoveredCard(null)}>
        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured card */}
          {featuredCard && (
            <div className="lg:col-span-8 rounded-[20px] border-[#3E595A33]/20  bg-back1 p-6 sm:p-8 md:p-10 min-h-[170px] flex flex-col justify-end">
              <div className="w-10 h-10 rounded-[5px] sm:rounded-[14px] bg-[#293041] flex items-center justify-center mb-4 sm:mb-6">
                {/* <div className="w-4 h-4 rounded-[4px] bg-green" /> */}
              
                  <Image 
                    src={featuredCard.src}
                    width={20} 
                    height={20}
                    className="w-[20px] h-auto object-contain"
                    alt="icon"
               
                  />
             
              </div>

              <h3 className="font-primary text-white text-sm sm:text-base font-bold leading-tight">
                {featuredCard.title}
              </h3>

              <p className="mt-3 text-white text-sm sm:text-base font-normal leading-[20px] sm:leading-[25px] font-secondary max-w-[360px]">
                {featuredCard.text}
              </p>
            </div>
          )}

          {/* Top right card */}
          {normalCards[0] && (
           <div
  onMouseEnter={() => setHoveredCard(0)}
  // onMouseLeave={() => setHoveredCard(null)}
  className={`lg:col-span-4 rounded-[20px] border bg-white p-5 sm:p-7 min-h-[170px] flex flex-col justify-end transition-all duration-300 cursor-pointer
  ${
    hoveredCard === null || hoveredCard === 0
      ? "border-[#A7DECA] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
      : "border-[#3E595A33]"
  }
`}
>
           <div
  className={`w-10 h-10 rounded-[5px] sm:rounded-[14px] flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 
  ${
    hoveredCard === null || hoveredCard === 0
      ? "bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)] "
      : "bg-[#E9F7F2]"
  }
`}
>
                {/* <div className="w-4 h-4 rounded-[4px] bg-green" /> */}
                   <Image 
                    // src={featuredCard.src}
                    src={normalCards[0].src}
                    width={20} 
                    height={20}
                    className={`w-[20px] h-auto object-contain *:
                        ${ hoveredCard === null || hoveredCard === 0 ? "brightness-0 invert" : ""}
                      
                      `}
                    alt="icon"
                   
                  />
              </div>

              <h3 className="font-primary text-black text-sm sm:text-base font-bold  leading-snug">
                {normalCards[0].title}
              </h3>

              <p className="mt-3 text-sm sm:text-base sm:leading-[25px] leading-[20px] text-black leading-relaxed font-secondary">
                {normalCards[0].text}
              </p>
            </div>
          )}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 cursor-pointer">
          {normalCards.slice(1).map((card, index) => (
         <div
  key={index}
  onMouseEnter={() => setHoveredCard(index + 1)}
  // onMouseLeave={() => setHoveredCard(null)}
  className={`rounded-[14px] border bg-white p-5 sm:p-7 min-h-[170px] flex flex-col justify-end transition-all duration-300 rounded-[5px] sm:rounded-[14px]
  ${
    hoveredCard === index + 1
      ? "border-[#A7DECA] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
      : "border-[#3E595A33]"
  }
`}
>
             <div
  className={`w-10 h-10 rounded-[14px] flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300
  ${
    hoveredCard === index + 1
      ? "bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)]"
      : "bg-[#E9F7F2]"
  }
`}
>
                   <Image 
                    // src={featuredCard.src}
                    src={card.src}
                    width={20} 
                    height={20}
                    className={`w-[20px] h-auto object-contain
                        ${ hoveredCard === index + 1? "brightness-0 invert" : ""}
                      `}
                    alt="icon"
               
                  />
              </div>

              <h3 className="font-primary text-black font-primary text-sm sm:text-base  font-bold leading-snug">
                {card.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base sm:leading-[25px] leading-[20px] font-normal text-black leading-relaxed font-primary">
                {card.text}
              </p>
            </div>
          ))}
        </div>
</div>
    </Container>
        <style>{
  `
  .sadg {
    font-family: 'Sedgwick Ave';
}
  
  `
  }</style>
    </section>
  );
}
