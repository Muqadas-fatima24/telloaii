'use client'

import React from 'react'
import Container from '@/components/container'
import Image from 'next/image'

export default function Footer() {
  // Automatically gets the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111D2D] text-white pt-12 pb-8">
     
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
{/* 1 */}
<div className="flex items-center gap-3">

  <div className="relative">
    <div className="w-10 h-10 bg-green rounded-[10px] flex items-center justify-center">
      <Image 
        src="/icon3.svg" 
        width={24}
        height={24}
        alt="TeloAI Logo"
        className="object-contain"
      />
    </div>

    <div className="absolute top-[-5px] right-[-5px] w-4 h-4 bg-white rounded-full border-2 border-dark" /> 
  </div>
  
  {/* The Text Section */}
  <span className="text-2xl font-bold font-primary tracking-tight text-white">
    Telo<span className="text-green">AI</span>
  </span>
</div>
          {/* Central Tagline */}
          <div className="text-center max-w-[500px]">
            <p className="text-sm sm:text-base font-primary font-medium leading-relaxed text-white">
              The AI WhatsApp agent purpose-built for UK dental practices. 
              Capture, qualify and convert more leads — 24/7.
            </p>
          </div>

          {/* Social Links using Images */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-white">
              Follow Us
            </span>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Image 
                  src="/icon1.svg" 
                  width={15} 
                  height={15} 
                  alt="Facebook"
                  className="w-[15px] h-[15px]"
                />
              </a>
              <a 
                href="#" 
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Image 
                  src="/icon2.svg" 
                  width={20} 
                  height={20} 
                  alt="Instagram"
                  className="w-[15px] h-[15px]" 
                />
              </a>
            </div>
          </div>
        </div>
        </Container>
      <div className='w-full h-[0.5px]  bg-[#FFFFFF] mb-2'></div>

        <Container>
        {/* Bottom Copyright Section with Dynamic Year */}
        <div className="pt-8 text-center">
          <p className="text-sm font-primary font-normal text-white tracking-wide">
            © {currentYear} TeloAI. Built for UK Dental Practices.
          </p>
        </div>

      </Container>
    </footer>
  )
}