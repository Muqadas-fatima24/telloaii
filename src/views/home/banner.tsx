import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Button from "@/components/button";
const Banner = () => {
  const data = {
  description: [
    "TeloAI is an AI WhatsApp agent that responds to new enquiries 24/7, re-engages old leads, and books patients directly into your diary.",
    "You spend thousands generating enquiries. If they're not answered fast, they go cold. TeloAI captures, qualifies and converts — even when your team can't reply.",
  ],
};
  return (
    <section 
      className="relative w-full min-h-[800px] flex items-center overflow-hidden py-20"
      style={{
        // Replace with your actual background image path
        backgroundImage: "url('/bannerback.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
      <div className=" lg:pt-[5rem] pt-[2rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap:6 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col  gap-4 sm:gap-5 lg:gap-8 z-10">
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
            <span className="text-white font-normal  text-[10px] lg:text-sm"> 
             
               AI WhatsApp Agent · Built for UK Dental Practices</span>
          </div>

          {/* Main Heading */}
       <h1 className="font-primary text-white text-[18px] sm:text-[32px] md:text-h1 lg:text-display font-bold leading-[1.1]">
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
<div className="max-w-[540px] flex flex-col gap-4">
  {data.description.map((para, index) => (
    <p
      key={index}
      className="text-white text-sm md:text-base font-[400] leading-relaxed font-primary"
    >
      {para}
    </p>
  ))}
</div>


          {/* CTAs */}
          <div className="flex justify-center sm:justify-start sm:mt-0 sm:mb-2 mt-2 mb-2 sm:flex-wrap items-center gap-2 sm:gap-4">
            <Link href="/">
            <Button className=" text-sm bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)] hover:text-white/80 transition duration-300 sm:text-base text-white sm:!rounded-[15px] !px-5 !py-2.5 font-secondary font-semibold sm:!px-9 sm:!py-3.5 !px-5 !py-2.5 !rounded-[5px] sm:rounded-[15px]">
              Book a Demo
            </Button>
            </Link>
            <Link href='/'>
            <Button className=" text-sm border hover:text-white/80 transition duration-300 bg-green/12 border border-white sm:text-base text-white !rounded-[5px] font-semibold !px-5 !py-2.5 sm:!px-9 sm:!py-3.5 sm:!rounded-[15px]">
              See How It Works
            </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2  text-white text-sm">
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
            <span className="font-primary  text-[10px] sm:text-sm">Built for UK dental practices · Connects with CRM systems and Dentally</span>
          </div>
        </div>
<style>{
  `
  .sadg {
    font-family: 'Sedgwick Ave';
}
  .totap{
    margin-top: -2rem;
}
  `
  }</style>
        {/* Right Side: Phone Image */}
        <div className="relative flex lg:totap justify-center lg:justify-end">
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