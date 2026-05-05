import Container from '@/components/container';
import Image from 'next/image';
import React from 'react'
type DataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  description: string;
  cards: {
    title: string;
    text: string;
    src:{
        img:string;
        check:boolean;
    };
  }[];
};


export default function Practice({data} : {data:DataProps}) {
  return (
 <>
 <section className="w-full bg-white py-20">
  <Container>
    <div className="max-w-[710px]">
      <span className="text-green font-primary text-base font-semibold tracking-[0.08em] uppercase">
        {data.label}
      </span>

      <h2 className="mt-4 font-primary text-black text-[32px] md:text-h2 font-bold leading-[1.08] max-w-[760px]">
        {data.title.before}{" "}
        <span className="font-tertiary sadg text-green font-normal">
          {data.title.highlight}
        </span>
      </h2>

      <p className="mt-4 text-[#4B5563] text-base md:text-lg leading-relaxed font-primary max-w-[620px]">
        {data.description}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
      {data.cards.map((card, index) => (
        <div
          key={index}
          className=
      {`rounded-[20px] border  bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]
${
    card.src.check 
    ? "border-[#A7DECA]" 
    : "border-[#3E595A33]/20"
}
        `}
      
      >
<div className={`w-10 h-10 rounded-[10px] flex items-center justify-center mb-6 ${
  card.src.check 
    ? "bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)]" 
    : "bg-[#E9F7F2]"
}`}>
  <Image 
    src={card.src.img}
    width={20} 
    height={20}
    className="w-[20px] h-auto object-contain"
    alt="icon"
    priority
  />
</div>
          <h3 className="font-primary text-black text-[18px] font-semibold leading-snug">
            {card.title}
          </h3>

          <p className="mt-3 text-[15px] text-black leading-relaxed font-primary font-[400] leading-[35px]">
            {card.text}
          </p>
        </div>
      ))}
    </div>
    <style>{
  `
  .sadg {
    font-family: 'Sedgwick Ave';
}
  
  `
  }</style>
  </Container>
</section>
 </>
  )
}

