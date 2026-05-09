"use client";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import { useState, useEffect } from "react";
const navLinks = [
  { name: "How it works", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 20px, set isScrolled to true
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 flex justify-center w-full  px-2 sm:px-4">
      <nav
        className={`max-w-[1300px] w-full bg-[#0A1B22]/80 flex items-center transition-all duration-300 px-3 md:px-5 mt-5 sm:rounded-[20px] rounded-[5px]
          ${isScrolled 
            ? "bg-[#0A1B22]/80 backdrop-blur-3xl border-[#3B4F53]/50" 
            : "bg-[#0A1B22] border-[#3B4F53]"
          }
          
          `}
        style={{
          height: "65px",
          border: "1px solid #3B4F53",
          boxShadow: "0px 4px 30px 0px #00000033",
        }}
      >
        <div className="flex items-center justify-between w-full">
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-image.png"
              width={108}
              height={50}
              className="sm:w-[108px] w-[95px] h-auto object-contain"
              alt="TeloAI Logo"
              priority
            />
          </Link>

          {/* 2. Navigation Links Section */}
          <div className=" cursor-pointer hidden font-medium text-sm md:flex font-secondary items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white transition duration-300 hover:text-white/80 text-sm md:text-sm text-white  transition whitespace-nowrap font-[500]"
              >
                {link.name}
              </Link>
            ))}
          </div>
<style>
  {
    `
    .round{
    border-radius: 5px;
}
    `
  }
</style>
          {/* 3. Call to Action Button */}
          <Link href="/">
          <Button className="bg-green sm:!rounded-[15px] round rounded-[5px] font-secondary transition duration-300 cursor-pointer font-[600] text-white text-sm md:text-sm font-[500]  px-3 sm:!px-4 md:!px-5 sm:py-3 sm:py-2 hover:!text-white/80 bg-green  transition whitespace-nowrap">
            Book a Demo
          </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
