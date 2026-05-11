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

export default function Solution({ data }: { data: SolutionDataProps }) {
  const featuredCard = data.cards.find((card) => card.featured);
  const normalCards = data.cards.filter((card) => !card.featured);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F7F9FB] py-10 sm:py-20">
      <Container>
        {/* Heading Section - (Kept same as yours) */}
        <div className="text-primary max-w-[795px]">
          <span className="text-green text-[10px] sm:text-base font-semibold tracking-[0.08em] uppercase">
            {data.label}
          </span>
          <h2 className="mt-2 sm:mt-4 font-primary text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-[1.08] max-w-[710px] md:max-w-[920px]">
            {data.title.before}{" "}
            <span className="font-tertiary sadg text-green font-normal leading-none">
              {data.title.highlight}
            </span>{" "}
            {data.title.after}
          </h2>
          <p className="mt-2 sm:mt-4 max-w-[920px] sm:max-w-[820px] text-black text-sm sm:text-base leading-relaxed font-primary">
            {data.description}
          </p>
        </div>

        <div onMouseLeave={() => setHoveredCard(null)}>
          <div className="mt-8 lg:mt-12  grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Featured card - (Usually doesn't have the hover effect, but kept for layout) */}
            {featuredCard && (
              <div className="lg:col-span-8 rounded-[20px] border-[#3E595A33]/20 bg-back1 sm:p-6 md:p-8 p-4 min-h-[170px] flex flex-col justify-center">
                <div className="md:h-10 md:w-10 w-8 h-8 rounded-[5px] sm:rounded-[14px] bg-[#293041] flex items-center justify-center  mb-3 sm:mb-6 ">
                  <Image src={featuredCard.src} width={20} height={20} className="sm:w-[20px] w-[15px] h-auto object-contain" alt="icon" />
                </div>
                <h3 className="font-primary text-white text-sm sm:text-base font-bold leading-tight">{featuredCard.title}</h3>
                <p className="mt-3 text-white text-sm sm:text-base font-normal leading-[25px] font-primary max-w-[360px]">{featuredCard.text}</p>
              </div>
            )}

            {/* Top right card */}
            {normalCards[0] && (
              <div
                onMouseEnter={() => setHoveredCard(0)}
                className={`lg:col-span-4 rounded-[20px] border bg-white sm:p-6 md:p-8 p-4 min-h-[170px] flex flex-col justify-center transition-all duration-500 ease-in-out cursor-pointer
                ${(hoveredCard === null || hoveredCard === 0) ? "border-[#A7DECA] shadow-[0_4px_30px_rgba(0,0,0,0.15)]" : "border-[#3E595A33] shadow-none"}
              `}>
                {/* ICON CONTAINER WITH GRADIENT LAYER */}
                <div className={`relative mb-3 sm:mb-6 md:h-10 md:w-10 w-8 h-8 rounded-[5px] sm:rounded-[14px] flex items-center justify-center mb-6 overflow-hidden transition-all duration-500 ease-in-out ${(hoveredCard === null || hoveredCard === 0) ? "shadow-md" : "bg-[#E9F7F2]"}`}>
                  <div className={`absolute inset-0 bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)] transition-opacity duration-500 ease-in-out ${(hoveredCard === null || hoveredCard === 0) ? "opacity-100" : "opacity-0"}`} />
                  <div className="relative z-10">
                    <Image src={normalCards[0].src} width={20} height={20} alt="icon" className={`sm:w-[20px] w-[15px] h-auto object-contain transition-all duration-500 ease-in-out ${(hoveredCard === null || hoveredCard === 0) ? "brightness-0 invert" : ""}`} />
                  </div>
                </div>
                <h3 className="font-primary text-black text-sm sm:text-base font-bold leading-snug">{normalCards[0].title}</h3>
                <p className="mt-3 text-sm sm:text-base text-black font-secondary">{normalCards[0].text}</p>
              </div>
            )}
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 cursor-pointer">
            {normalCards.slice(1).map((card, index) => {
              const isActive = hoveredCard === index + 1;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index + 1)}
                  className={`rounded-[20px] border bg-white sm:p-6 md:p-8 p-4 min-h-[170px] flex flex-col justify-end transition-all duration-500 ease-in-out
                  ${isActive ? "border-[#A7DECA] shadow-[0_4px_30px_rgba(0,0,0,0.15)]" : "border-[#3E595A33] shadow-none"}
                `}>
                  {/* ICON CONTAINER WITH GRADIENT LAYER */}
                  <div className={`relative mb-3 sm:mb-6 md:h-10 md:w-10 w-8 h-8 rounded-[5px] sm:rounded-[14px] flex items-center justify-center mb-6 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "shadow-md" : "bg-[#E9F7F2]"}`}>
                    <div className={`absolute inset-0 bg-[linear-gradient(180deg,#27B17E_0%,#33DE90_100%)] transition-opacity duration-500 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`} />
                    <div className="relative z-10">
                      <Image src={card.src} width={20} height={20} alt="icon" className={`sm:w-[20px] w-[15] h-auto object-contain transition-all duration-500 ease-in-out ${isActive ? "brightness-0 invert" : ""}`} />
                    </div>
                  </div>
                  <h3 className="font-primary text-black text-sm sm:text-base font-bold leading-snug">{card.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-black font-primary">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .sadg { font-family: 'Sedgwick Ave'; }
      `}</style>
    </section>
  );
}
