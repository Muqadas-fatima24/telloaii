
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

  return (
    <section className="w-full bg-[#F7F9FB] py-20">
      <Container>
        {/* Heading */}
        <div className="text-primary max-w-[795px]">
          <span className="text-green text-base font-semibold tracking-[0.08em] uppercase">
            {data.label}
          </span>

          <h2 className="mt-3 font-primary text-black text-[32px] md:text-h2 font-bold leading-[43px] max-w-[920px]">
            {data.title.before}{" "}
            <span className="font-tertiary sadg text-green font-normal leading-none">
              {data.title.highlight}
            </span>{" "}
            {data.title.after}
          </h2>

          <p className="mt-5 max-w-[820px] text-black text-base md:text-base leading-relaxed font-primary">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured card */}
          {featuredCard && (
            <div className="lg:col-span-8 rounded-[20px] border-[#3E595A33]/20  bg-back1 p-8 md:p-10 min-h-[170px] flex flex-col justify-end">
              <div className="w-10 h-10 rounded-[14px] bg-[#293041] flex items-center justify-center mb-6">
                {/* <div className="w-4 h-4 rounded-[4px] bg-green" /> */}
              
                  <Image 
                    src={featuredCard.src}
                    width={20} 
                    height={20}
                    className="w-[20px] h-auto object-contain"
                    alt="icon"
                    priority
                  />
             
              </div>

              <h3 className="font-primary text-white text-[20px] md:text-[22px] font-semibold leading-tight">
                {featuredCard.title}
              </h3>

              <p className="mt-3 text-white/70 text-[15px] md:text-base leading-relaxed font-secondary max-w-[360px]">
                {featuredCard.text}
              </p>
            </div>
          )}

          {/* Top right card */}
          {normalCards[0] && (
            <div className="lg:col-span-4 rounded-[20px] border border-[#A7DECA] bg-white p-7 min-h-[170px] flex flex-col justify-end">
              <div className="w-10 h-10 rounded-[10px] bg-green flex items-center justify-center mb-6">
                {/* <div className="w-4 h-4 rounded-[4px] bg-green" /> */}
                   <Image 
                    // src={featuredCard.src}
                    src={normalCards[0].src}
                    width={20} 
                    height={20}
                    className="w-[20px] h-auto object-contain"
                    alt="icon"
                    priority
                  />
              </div>

              <h3 className="font-primary text-black text-[18px] font-semibold leading-snug">
                {normalCards[0].title}
              </h3>

              <p className="mt-3 text-[15px] text-black/70 leading-relaxed font-secondary">
                {normalCards[0].text}
              </p>
            </div>
          )}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {normalCards.slice(1).map((card, index) => (
            <div
              key={index}
              className="rounded-[14px] border border-[#3E595A33]/20 bg-white p-7 min-h-[170px] flex flex-col justify-end"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#E9F7F2] flex items-center justify-center mb-6">
                   <Image 
                    // src={featuredCard.src}
                    src={card.src}
                    width={20} 
                    height={20}
                    className="w-[20px] h-auto object-contain"
                    alt="icon"
                    priority
                  />
              </div>

              <h3 className="font-primary text-black text-base font-bold leading-snug">
                {card.title}
              </h3>

              <p className="mt-3 text-base text-black leading-relaxed font-primary">
                {card.text}
              </p>
            </div>
          ))}
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
