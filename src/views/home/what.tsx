"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Container from "@/components/container";
import { X } from 'lucide-react';

export type Review = {
  logo: string;
  rating: string;
  quote: string;
  author: string;
  role: string;
  isVideo?: boolean;
  thumbnail?: string;
  videoUrl?: string; 
};

export type ReviewSectionProps = {
  label: string;
  title: { before: string; highlight: string; after: string; };
  subtitle: string;
  reviews: Review[];
};

export default function What({ data }: { data: ReviewSectionProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const leftColumn = [data.reviews[0], data.reviews[2]];
  const rightColumn = [data.reviews[1], data.reviews[3]];

  const openVideo = (url: string) => {
    setActiveVideo(url);
    setIsOpen(true);
  };

  const renderCard = (review: Review, index: number) => {
    if (!review) return null;

    if (review.isVideo) {
      return (
        <div 
          key={index}
          onClick={() => openVideo(review.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ")}
          // Aspect-video ensures the 16:9 landscape shape from your screenshot
          className="relative rounded-[24px] overflow-hidden cursor-pointer group w-full aspect-video shadow-md border border-[#CFE9DA]"
        >
          {/* Main Thumbnail - object-cover ensures it fills the 16:9 box without gaps */}
          <Image
            src={review.thumbnail || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Review video thumbnail"
            priority={index === 0}
          />
          
          {/* Bottom Gradient: Matches the dark-to-transparent look in image_631ddc.png */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Text Content Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 text-white">
             <h3 className="font-primary font-bold text-lg md:text-2xl mb-1">
                {review.role}
             </h3>
             <p className="font-secondary text-sm md:text-base opacity-80 mb-3">
                {review.author}
             </p>
             
             {/* Five Star Rating */}
             <div className="flex gap-1">
               {[...Array(5)].map((_, i) => (
                 <img key={i} src="/star.png" className="w-4 h-4 md:w-5 md:h-5" alt="star" />
               ))}
             </div>
          </div>
        </div>
      );
    }

    return (
      <div 
        key={index}
        className="relative rounded-[24px] bg-white p-8 shadow-sm border border-[#CFE9DA] min-h-[300px] flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="h-8 relative w-28">
              <Image src={review.logo} fill className="object-contain object-left" alt="clinic logo" />
            </div>
            <div className="flex items-center gap-1 font-bold text-sm">
              {review.rating}
              <img src="/star.png" alt="star icon" className="w-4 h-4" />
            </div>
          </div>
          <p className="font-secondary text-black text-[16px] leading-relaxed italic">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>
        <div className="mt-8">
          <p className="font-bold text-base leading-tight">{review.role}</p>
          <p className="text-sm opacity-60 mt-1">{review.author}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#F7F9FB] py-16 md:py-24 relative">
      <Container>
        <div className="max-w-[1240px] mx-auto px-4">
          
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-green text-sm font-bold tracking-[0.2em] uppercase mb-4">{data.label}</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
              {data.title.before} <span className="sadg text-green italic font-normal">{data.title.highlight}</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">{data.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              {leftColumn.map((review, idx) => renderCard(review, idx))}
            </div>
            {/* Right Column */}
            <div className="space-y-8"> 
              {rightColumn.map((review, idx) => renderCard(review, idx))}
            </div>
          </div>
        </div>
      </Container>

      {/* Video Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-green-400 transition-all p-2"
            aria-label="Close video"
          >
            <X size={44} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            <iframe
              src={activeVideo.includes("youtube.com") ? activeVideo.replace("watch?v=", "embed/") : activeVideo} 
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}