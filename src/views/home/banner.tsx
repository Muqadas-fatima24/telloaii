import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

const Banner = () => {
  const data = {
  description: [
    "TeloAI is an AI WhatsApp agent that responds to new enquiries 24/7, re-engages old leads, and books patients directly into your diary.",
    "You spend thousands generating enquiries. If they're not answered fast, they go cold. TeloAI captures, qualifies and converts — even when your team can't reply.",
  ],
};
  return (
    <section 
      className="-mt-[77px] relative w-full min-h-[800px] flex items-center overflow-hidden py-20"
      style={{
        // Replace with your actual background image path
        backgroundImage: "url('/hero-bg.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
      <div className=" pt-[5rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col gap-6 z-10">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-border border border-[#3B4F53] w-fit px-4 py-1.5 rounded-full">
             <Image 
                src="/mask.png"
                width={20}
                height={20}
                className="w-[15px] h-auto object-contain"
                alt="starLogo"
                priority
              />
            <span className="text-green text-sm"> 
             
               AI WhatsApp Agent · Built for UK Dental Practices</span>
          </div>

          {/* Main Heading */}
       <h1 className="font-primary text-white text-[32px] md:text-h1 lg:text-display font-bold leading-[1.1]">
  Stop losing dental leads while your practice is{" "}
  <span className="font-tertiary text-green font-normal sadg">

    busy, closed 
  </span>
  {" "}
  or short-staffed.
</h1>

          {/* Description */}
          {/* <p className="text-white text-lg md:text-xl max-w-[540px] leading-relaxed font-secondary">
            TeloAI is an AI WhatsApp agent that responds to new enquiries 24/7, 
            re-engages old leads, and books patients directly into your diary.
          </p> */}
<div className="max-w-[540px] flex flex-col gap-2">
  {data.description.map((para, index) => (
    <p
      key={index}
      className="text-white text-base md:text-base font-[400] leading-relaxed font-primary"
    >
      {para}
    </p>
  ))}
</div>


          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button className="bg-green bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)] text-base text-white font-secondary font-semibold px-8 py-4 rounded-[15px]">
              Book a Demo
            </button>
            <button className="border bg-green/12 border-white text-base text-white font-semibold px-8 py-4 rounded-[15px]  transition">
              See How It Works
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 mt-4 text-white text-sm">
            {/* <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg> */}
              <Image 
                src="/mask2.png"
                width={20}
                height={20}
                className="w-[15px] h-auto object-contain"
                alt="starLogo"
                priority
              />
            <span>Built for UK dental practices · Connects with CRM systems and Dentally</span>
          </div>
        </div>
<style>{
  `
  .sadg {
    font-family: 'Sedgwick Ave';
}
  
  `
  }</style>
        {/* Right Side: Phone Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px]">
            <Image
              src="/phone-mockup.png" // Replace with your phone image
              width={450}
              height={900}
              alt="TeloAI WhatsApp Interface"
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
      </Container>
    </section>
  );
};

export default Banner;