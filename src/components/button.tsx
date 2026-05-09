import Link from "next/link";
import React from "react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  text?: "white" | "primary" | "secondary" | "black";
  arrowbg?: "black" | "secondary" | "white";
  arrow?: "primary" | "secondary" | "white";
  bg?: "transparent" | "primary" | "secondary" | "white" | "gradient";
  variant?: "default" | "pricing" | "question" | "withArrow"; // Added withArrow
  isPopular?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({
  href,
  children,
  text,
  arrowbg,
  bg,
  arrow,
  className = "",
  variant = "default",
  isPopular = false,
  type = "button",
  onClick,
}: ButtonProps) => {
  
  const isGradient = bg === "gradient";
  const gradientStyles = isGradient
    ? { background: "linear-gradient(90deg, #27B17E 0%, #33DE90 100%)", border: "none" }
    : {};

  const isExternal = href ? /^https?:\/\//i.test(href) : false;

  // 1. Pricing Variant
  if (variant === "pricing") {
    return (
      <button
        type={type}
        onClick={onClick}
        style={gradientStyles}
        className={`mt-10 w-full py-4 rounded-xl font-primary font-bold transition-all active:scale-95 ${
          isGradient ? "text-white" : isPopular ? "bg-green text-white" : "bg-back1 text-white"
        } ${className}`}
      >
        {children}
      </button>
    );
  }

  // 2. Question Variant
  if (variant === "question") {
    return (
      <button
        type={type}
        onClick={onClick}
        style={gradientStyles}
        className={`mt-10 w-fit bg-green text-white font-primary font-bold py-4 px-8 rounded-xl transition-all ${className}`}
      >
        {children}
      </button>
    );
  }

  // 3. The Old Default (Now called "withArrow")
  if (variant === "withArrow") {
    return (
      <Link
        href={href || "#"}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer nofollow" : undefined}
        style={gradientStyles}
        className={`py-2.5 ps-6 pr-14 border rounded-full transition-all duration-200 group/button inline-block relative h-[50px] text-lg ${className} ${
          isGradient ? "text-white border-none" : "bg-transparent border-white text-black"
        }`}
      >
        <span className={`relative capitalize z-10 ${text === "white" || isGradient ? "text-white" : ""} pe-2`}>
          {children}
        </span>
        <span
          className="flex transition-all duration-300 group-hover/button:w-[calc(100%-9px)] justify-center items-center w-[44px] h-[44px] absolute top-1/2 -translate-y-1/2 rounded-full right-1"
          style={{
            backgroundColor: arrowbg === "secondary" ? "#121F39" : arrowbg === "white" ? "#fff" : "#000",
            backgroundImage: "url(/button-arrow.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
          }}
        />
      </Link>
    );
  }

  // 4. NEW DEFAULT (The Navbar style button)
  const commonClasses = `cursor-pointer font-secondary font-[500] px-5 md:px-7 py-2.5 rounded-[15px] transition whitespace-nowrap inline-block text-center ${
    isGradient ? "text-white" : "bg-green text-white"
  } ${className}`;

  if (href) {
    return (
      <Link 
        href={href} 
        className={commonClasses} 
        style={gradientStyles}
        target={isExternal ? "_blank" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={gradientStyles}
      className={commonClasses}
    >
      {children}
    </button>
  );
};

export default Button;