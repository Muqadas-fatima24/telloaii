import React from 'react';
import { Check } from 'lucide-react'; 
import Container from '@/components/container';
import Button from '@/components/button';
export type PricingFeature = string;

export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
};

export type PricingSectionProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  subtitle: string;
  plans: PricingPlan[];
  footerNote: {
    title: string;
    text: string;
  };
};

export default function Pricing({ data }: { data: PricingSectionProps }) {
  return (
    <section className="w-full bg-white py-10 sm:py-20">
      <Container>       
        {/* Header Section */}
        <div className="md:mb-25 mb-16 text-center">
          <p className="font-primary text-green  text-[10px] sm:text-base font-semibold tracking-widest uppercase">
            {data.label}
          </p>
          <h2 className="mt-4 font-primary text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-[20px]">
              {data.title.before}{" "}
            <span className="font-tertiary sadg text-green font-normal">
              {data.title.highlight} 
            </span>
          </h2>
          <p className="mx-auto mt-6 text-sm sm:text-base max-w-[600px] font-secondary text-black leading-relaxed">
             {data.subtitle}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-13 sm:gap-6 items-center">
          {data.plans.map((plan, index) => (
            <div 
              key={index}
              className={`shadow-[0px_4px_30px_0px_#00000026] relative flex flex-col p-8 rounded-[25px] text-left transition-all duration-300 min-h-[600px] ${
                plan.isPopular 
                ? 'bg-back1 text-white shadow-[0_4px_30px_rgba(0,0,0,0.15)] scale-105 z-10 py-12' 
                : 'bg-white border border-[#A7DECA] text-[#1C373F] shadow-sm '
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 border-[.5px] border-white -translate-x-1/2 bg-green text-white text-sm font-semibold px-6 py-2 rounded-[5px] uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="font-primary text-h3 font-bold">{plan.name}</h3>
              <p className={`mt-3 font-secondary text-sm leading-relaxed ${plan.isPopular ? 'text-white' : 'text-black'}`}>
                {plan.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className={`text-sm font-primary ${plan.isPopular ? 'text-white' : 'text-green'}`}>From</span>
                <span className={` font-primary md:text-display text-h1 font-bold ${plan.isPopular ? 'text-white' : 'text-green'}`}>{plan.price}</span>
                <span className={`text-sm font-primary ${plan.isPopular ? 'text-white' : 'text-green'}`}>/month</span>
              </div>

              <ul className="mt-5 space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-secondary">
                    <div className={`w-6 h-6 rounded-full flex justify-center items-center ${plan.isPopular ? 'bg-[#14353A] shadow-[0_4px_30px_rgba(0,0,0,0.15)]' : 'bg-[#E9F7F2] shadow-[0_4px_30px_rgba(0,0,0,0.15)]'} `}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-green' : 'text-green'}`} />
                   </div>
                    <span className={plan.isPopular ? 'text-white' : 'text-text'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <button className={`mt-10 w-full py-4 rounded-xl font-primary font-bold transition-all active:scale-95 ${
                plan.isPopular 
                ? 'bg-green text-white hover:bg-green' 
                : 'bg-back1 text-white hover:bg-black'
              }`}>
                {plan.buttonText}
              </button> */}
              <Button variant="pricing" isPopular={plan.isPopular}  className="font-secondary !cursor-pointer !font-semibold !rounded-[5px]">
                   {plan.buttonText}
              </Button>
              
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="md:mt-20 mt-10 text-center font-semibold mx-auto max-w-[800px] rounded-[20px] bg-[#F7F9FB] border border-[#A7DECA] p-8">
          <h4 className="font-primary text-[#1C373F] text-base font-semibold">
            {data.footerNote.title}
          </h4>
          <p className="mt-2 font-secondary text-[#1C373F] text-sm font-normal leading-relaxed">
            {data.footerNote.text}         
          </p>
        </div>

      </Container>
    </section>
  );
}