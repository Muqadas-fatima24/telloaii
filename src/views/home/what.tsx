'use client'

import Container from '@/components/container';
import Image from 'next/image';
import { useState } from 'react';

type ReviewCard = {
  logo: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  location: string;
  isVideo?: boolean;
  videoUrl?: string;
  thumbnail?: string;
};

type ReviewDataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  description: string;
  reviews: ReviewCard[]; 
};

export default function Practice({ data }: { data: ReviewDataProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  const openModal = (url: string) => {
    setActiveVideo(url);
    setIsOpen(true);
  };

  return (
    <section className="w-full bg-[#F7F9FB] py-10 sm:py-20 font-poppins">
      <Container>
        {/* Header Section */}
        <div className="sm:text-center text-left flex flex-col sm:items-center sm:mb-8 mb-6 md:mb-12">
          <span className="text-green text-[10px] sm:text-base font-semibold tracking-widest uppercase">
            {data.label}
          </span>

          <h2 className="mt-2 text-black  text-[18px] sm:text-[32px] md:text-h2 font-bold leading-tight">
            {data.title.before}{" "}
            <span className="font-tertiary sadg text-green font-normal">
              {data.title.highlight}
            </span>
          </h2>

          <p className="mt-2 sm:mt-4 text-black text-[10px] sm:text-sm md:text-base max-w-[600px]">
            {data.description}
          </p>
        </div>

        {/* The Grid Layout */}
        <div className="sm:grid grid-cols-1 hidden md:grid-cols-2 gap-4 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <ReviewCard item={data.reviews[0]} />
            <ReviewCard item={data.reviews[1]} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Video*/}
<div
  onClick={() => data.reviews[2].videoUrl && openModal(data.reviews[2].videoUrl)}
  className="relative cursor-pointer overflow-hidden rounded-[24px] w-full h-[100%]  group">
  {/* sm:h-[100%] md:h-[370px] lg:h-[450px] xl:h-[470] */}
  <Image
    src={data.reviews[2].thumbnail || ''}
    alt="Video thumbnail"
    width={500}
    height={100}
    className="w-full h-full object-center object-cover transition-transform duration-500 group-hover:scale-102"
  />
</div>

            <ReviewCard item={data.reviews[3]} />
          </div>

        </div>



{/* ...... */}

   <div className="grid grid-cols-1 sm:hidden md:grid-cols-2 gap-4 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <ReviewCard item={data.reviews[0]} />
            <div
  onClick={() => data.reviews[2].videoUrl && openModal(data.reviews[2].videoUrl)}
  className="relative cursor-pointer overflow-hidden rounded-[24px] w-full h-[100%]  group">
  {/* sm:h-[100%] md:h-[370px] lg:h-[450px] xl:h-[470] */}
  <Image
    src={data.reviews[2].thumbnail || ''}
    alt="Video thumbnail"
    width={500}
    height={100}
    className="w-full h-full object-center object-cover transition-transform duration-500 group-hover:scale-102"
  />
            </div>
             <ReviewCard item={data.reviews[1]} />
            <ReviewCard item={data.reviews[3]} />
          </div>

</div>


{/* ....../ */}




        {/* Video Modal Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setIsOpen(false)}>
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src={activeVideo}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <style>{`
          .sadg { font-family: 'Sedgwick Ave', cursive; }
        `}</style>
      </Container>
    </section>
  );
}

// Sub-component
function ReviewCard({ item }: { item: ReviewCard }) {
  return (
    <div className="bg-white border border-[#3E595A33]  px-5 py-6 sm:px-6 sm:py-8 md:px-7 md:py-10 lg:px-9 lg:py-12 rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-6">
        <Image src={item.logo} alt="brand" width={120} height={40} className="h-8 w-auto object-contain" />
        <div className="flex items-center justify-center gap-2">

  <span className="font-normal text-sm text-black">
    {item.rating.toFixed(1)}
  </span>
  <Image
    src="/star.png" 
    alt="rating star"
    width={16} 
    height={16} 
    className="object-contain"
  />
</div>
      </div>
      <p className="text-black font-normal text-sm sm:text-base leading-relaxed sm:mb-6 mb-4  pb-1 sm:pt-4 sm:pb-2 ">
        {item.quote}
      </p>
      <div>
        <h3 className="font-bold text-black text-sm sm:text-base" >{item.role}</h3>
        <p className=" text-sm sm:text-base mt-1">{item.location}</p>
      </div>
    </div>
  );
}