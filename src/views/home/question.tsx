export type QuestionItem = {
  number: string;
  question: string;
  subtext: string;
};

export type LeadLossSectionProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  description: string;
  buttonText: string;
  questions: QuestionItem[];
};
import React from 'react';
import { MoveRight } from 'lucide-react';
import Button from '@/components/button';
import Container from '@/components/container';

export default function Question({ data }: { data: LeadLossSectionProps }) {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content Column */}
          <div className="flex flex-col">
            <span className="font-secondary text-green text-base font-semibold tracking-normal uppercase">
              {data.label}
            </span>
            
            <h2 className="mt-6 font-primary text-black text-h2 md:text-h1 lg:text-display font-bold leading-[1.1]">
              {data.title.before}{" "}
              <span className="font-tertiary text-green font-normal block md:inline sadg">
                {data.title.highlight}
              </span>
            </h2>
            
            <p className="mt-4 font-secondary text-black text-base max-w-[550px]">
              {data.description}
            </p>
            
            <Button variant='question' className="!bg-[linear-gradient(90deg,#27B17E_0%,#33DE90_100%)] mt-10 w-fit bg-green  text-white font-primary font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green/20">
              {data.buttonText}
            </Button>

          </div>

          {/* Right Questions Column */}
          <div className="flex flex-col gap-4">
            {data.questions.map((item, index) => (
              <div 
                key={index}
                className="shadow-[0px_15px_20px_0px_rgba(0,0,0,0.08)] group flex items-center justify-between p-6 lg:p-8 bg-white border border-[#A7DECA] rounded-[20px] cursor-pointer"
              >
                <div className="flex items-center gap-6 lg:gap-8">
                  {/* Styled Number */}
                  <span className="font-tertiary sadg text-green text-h4 md:text-h3">
                    {item.number}
                  </span>
                  
                  <div>
                    <h3 className="font-primary text-black text-base font-medium leading-tight">
                      {item.question}
                    </h3>
                    <p className="mt-1 font-[400] font-primary text-black text-sm uppercase tracking-wide">
                      {item.subtext}
                    </p>
                  </div>
                </div>
                
                {/* Arrow Icon */}
                <MoveRight className="text-border group-hover:text-green group-hover:translate-x-2 transition-all" size={24} />
            
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}