'use client'

import { useState } from 'react'
import Container from '@/components/container'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  data: {
    label: string
    title: {
      before: string
      highlight: string
    }
    questions: FAQItem[]
  }
}

export default function FAQ({ data }: FAQProps) {
  // Set first item (index 0) open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white py-10 sm:py-20 font-poppins">
      {/* Max-width 1000px as requested */}
    <div className="max-w-[800px] mx-auto px-3 md:px-5">
        {/* Header Section */}
        <div className="sm:text-center text-left flex flex-col sm:items-center mb-5 md:mb-10 sm:mb-8">
          <span className="text-green text-[10px] sm:text-base font-semibold tracking-widest uppercase mb-2">
            {data.label}
          </span>

          <h2 className="text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-tight">
            {data.title.before},{" "}
            <span className="font-tertiary sadg text-green font-normal">
              {data.title.highlight}.
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {data.questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className={`group border rounded-[15px] transition-all duration-300 cursor-pointer overflow-hidden
                  ${isOpen 
                    ? "border-[#A7DECA] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]" 
                    : "border-[#3E595A33] bg-white"
                  }
                `}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between p-3 sm:p-6 lg:p-7">
                  <h3 className={`text-[10px] sm:text-sm md:text-base font-medium transition-colors font-primary duration-300
                    ${isOpen ? "text-black" : "text-black"}
                  `}>
                    {item.question}
                  </h3>
                  
                  <div className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-colors ${isOpen ? "text-green" : "text-black"}`} 
                    />
                  </div>
                </div>

                {/* Animated Answer Body */}
                <div className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden font-primary">
                    <div className="px-3 pb-4 sm:px-7 sm:pb-8">
                      <p className="text-[#6A758B] font-normal text-[10px] sm:text-sm md:text-base leading-relaxed max-w-[90%]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

    </div>
    </section>
  )
}