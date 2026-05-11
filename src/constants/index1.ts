// export const bannerdata = {
//   backgroundImage: "/hero-bg.png",
//   badge: {
//     icon: "/mask.png",
//     text: "AI WhatsApp Agent · Built for UK Dental Practices",
//   },
//   heading: {
//     before: "Stop losing dental leads while your practice is",
//     highlight: "busy, closed",
//     after: "or short-staffed.",
//   },
//   description:
//     "TeloAI is an AI WhatsApp agent that responds to new enquiries 24/7, re-engages old leads, and books patients directly into your diary.",
//   buttons: [
//     {
//       text: "Book a Demo",
//     },
//     {
//       text: "See How It Works",
//     },
//   ],
//   trustText:
//     "Built for UK dental practices · Connects with CRM systems and Dentally",
//   phoneImage: {
//     src: "/phone-mockup.png",
//     alt: "TeloAI WhatsApp Interface",
//   },
// };

type DataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  description: string;
  cards: {
    title: string;
    text: string;
   src:{
        img:string;
        check:boolean;
    };
  }[];
};
export const problemData : DataProps  = {
  label: "THE PROBLEM",
  title: {
    before: "Most practices don’t have a lead problem. They have a",
    highlight: "response problem.",
  },
  description:
    "Your marketing may be working. The problem is what happens after the enquiry comes in.",
  cards: [
    {
      title: "Leads arrive outside working hours",
      text: "Patients enquire in the evenings, weekends and during busy clinic hours. By the time your team replies, they’ve often booked elsewhere.",
      src:{
        img:"/group1.png",
        check:true, 
      }
    },
    {
      title: "Marketing spend gets wasted",
      text: "Meta, Google, SEO and open days all drive interest — but delayed responses mean practices lose opportunities they’ve already paid to generate.",
      src:{
        img:"/group2.png",
        check:false, 
      }
    },
    {
      title: "Dead leads stay dead",
      text: "Most practices have hundreds of old enquiries, unfinished conversations and patients who never booked. That database is worth thousands.",
    //    src:"/group3.png", 
     src:{
        img:"/group3.png",
        check:false, 
      }
    },
  ],
};



// 3rd meet
type SolutionDataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  cards: {
    title: string;
    text: string;
    featured?: boolean;
    src:string;
  }[];
};

export const solutionData: SolutionDataProps = {
  label: "THE SOLUTION",
  title: {
    before: "Meet TeloAI — your",
    highlight: "24/7 AI WhatsApp agent",
    after: "for dental leads.",
  },
  description:
    "TeloAI helps dental practices respond instantly, continue conversations naturally and guide patients towards booking. Whether someone enquires about Invisalign, implants, whitening, emergency care or general treatment — TeloAI answers, qualifies and books.",
  cards: [
    {
      title: "Instant replies, day or night",
      text: "No more waiting until reception opens.",
      featured: true,
      src:"/mas1.png",
    },
    {
      title: "More value from marketing spend",
      text: "Every lead has a better chance of becoming a booked consultation.",
        src:"/mas2.png",
    },
    {
      title: "Reactivates old enquiries",
      text: "Turn forgotten leads into fresh conversations and revenue.",
        src:"/mas3.png",
    },
    {
      title: "Reduces pressure on reception",
      text: "Your team focuses on patients in practice while TeloAI handles enquiries.",
        src:"/mas4.png",
    },
    {
      title: "Books directly into the diary",
      text: "With Dentally integration, suitable leads are guided straight to booking.",
        src:"/mas5.png",
    },
  ],
};
// 4th enquiry
type StepsDataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  steps: {
    number: string;
    title: string;
    text: string;
  }[];
};

export const stepsData: StepsDataProps = {
  label: "HOW IT WORKS",
  title: {
    before: "From enquiry to booked appointment in",
    highlight: "five steps.",
  },
  steps: [
    {
      number: "01",
      title: "Capture the lead",
      text: "A patient enquires from your website, ads, social media or CRM.",
    },
    {
      number: "02",
      title: "Instant WhatsApp response",
      text: "TeloAI replies immediately with a helpful, natural conversation that keeps patients engaged.",
    },
    {
      number: "03",
      title: "Qualify the patient",
      text: "AI asks the right questions, understands treatment interest and guides to the next step.",
    },
    {
      number: "04",
      title: "Book or hand over",
      text: "TeloAI books directly into Dentally or passes qualified leads to your team.",
    },
    {
      number: "05",
      title: "Reactivate old leads",
      text: "TeloAI re-engages old enquiries in your database, giving you another chance to convert them.",
    },
  ],
};

// 5th part
export type RevenueStat = {
  value: string;
  label: string;
};

export type RevenueRecoveryProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  stats?: RevenueStat[];
  buttonText?: string;
  buttonText1?: string;
  buttonText2?:string;
  botPara?:string;
};
export const revenueData: RevenueRecoveryProps = {
  label: "REVENUE RECOVERY",
  title: {
    before: "You're already paying for the lead.",
    highlight: "TeloAI helps you stop wasting it.",
    after: ""
  },
  description: "Every missed call, delayed reply or forgotten enquiry has a cost. A single Invisalign, implant or cosmetic case is worth thousands. If TeloAI converts even one extra patient per month, the platform pays for itself.",
  stats: [
    { value: "£2,400+", label: "Avg Invisalign case" },
    { value: "£3,500+", label: "Avg Implant case" },
    { value: "1 patient", label: "Pays for the platform" }
  ],
  buttonText: "Recover Your Lost Revenue"
};
// after faqs
export const revenueData2: RevenueRecoveryProps = {
  label: "",
  title: {
    before: "Ready to turn more dental leads into",
    highlight: "booked patients?",
    after: ""
  },
  description: "Your practice doesn't need more admin pressure. It needs a faster, smarter way to handle enquiries. TeloAI helps you respond instantly, recover missed opportunities and generate more value from your marketing.",
  buttonText1: "Book Your Demo",
  buttonText2:"See TeloAI in Action",
  botPara:"Stop letting leads go cold. Start converting them while the interest is still high."
};

// 6th part 
 type UseCaseCard = {
  title: string;
  text: string;
  src: string; // Icon path
};

type UseCaseProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
    description: string;
  cards: UseCaseCard[];
};

export const useCaseData: UseCaseProps = {
  label: "USE CASES",
  title: {
    before: "Where TeloAI helps your practice",
    highlight: "thrive.",
    after: ""
  },
  description:"Your marketing may be working. The problem is what happens after the enquiry comes in.",
  cards: [
    {
      title: "New patient enquiries",
      text: "Reply instantly to people asking about becoming a patient or booking a check-up.",
      src: "/peak2.png"
    },
    {
      title: "Invisalign & cosmetic leads",
      text: "Guide patients through the first stage of interest and encourage them to book a consultation.",
      src: "/peak1.png"
    },
    {
      title: "Implant enquiries",
      text: "Support high-value treatment enquiries with quick, reassuring responses and clear next steps.",
      src: "/peak3.png"
    },
    {
      title: "Emergency enquiries",
      text: "Help patients understand availability and direct them to urgent booking options.",
      src: "/peak4.png"
    },
    {
      title: "Old lead reactivation",
      text: "Reconnect with previous enquiries who never booked and bring them back into conversation.",
      src: "/peak5.png"
    },
    {
      title: "Open day follow-up",
      text: "Make sure every Invisalign, implant or open day enquiry is followed up properly and quickly.",
      src: "/peak6.png"
    }
  ]
};
// 7th pricing

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

export const pricingData: PricingSectionProps = {
  label: "PRICING",
  title: {
    before: "Simple pricing for",
    highlight: "dental practices.",
    after: ""
  },
  subtitle: "Choose the level of support your practice needs based on enquiry volume, integrations and growth goals.",
  plans: [
    {
      name: "Starter",
      description: "For smaller practices that want to respond faster to new enquiries.",
      price: "£299",
      buttonText: "Get Started",
      features: [
        "Instant WhatsApp lead response",
        "Basic lead qualification",
        "Treatment-specific conversation flows",
        "Monthly reporting",
        "Practice-branded messaging"
      ]
    },
    {
      name: "Growth",
      description: "For practices actively spending on marketing and wanting to improve conversion.",
      price: "£499",
      isPopular: true,
      buttonText: "Get Started",
      features: [
        "Everything in Starter",
        "CRM integration",
        "Old lead reactivation campaigns",
        "Advanced treatment workflows",
        "Open day follow-up sequences",
        "Priority support"
      ]
    },
    {
      name: "Pro",
      description: "For high-growth practices wanting deeper automation and diary booking.",
      price: "£799",
      buttonText: "Get Started",
      features: [
        "Everything in Growth",
        "Dentally diary integration",
        "Direct booking support",
        "Multi-treatment campaign flows",
        "Advanced reporting & custom journeys",
        "Ongoing optimisation"
      ]
    }
  ],
  footerNote: {
    title: "Optional setup from £499",
    text: "Includes onboarding, practice information setup, treatment journey mapping, tone-of-voice setup and integration support."
  }
};

// 8th part

// export type Review = {
//   logo: string;
//   rating: string;
//   quote: string;
//   author: string;
//   role: string;
//   isVideo?: boolean;
//   thumbnail?: string;
// };

// export type ReviewSectionProps = {
//   label: string;
//   title: {
//     before: string;
//     highlight: string;
//     after: string;
//   };
//   subtitle: string;
//   reviews: Review[];
// };
// export const reviewData: ReviewSectionProps = {
//   label: "REVIEWS",
//   title: {
//     before: "What Dentists Are",
//     highlight: "Saying.",
//     after: ""
//   },
//   subtitle: "Real results from practices using TeloAI",
//   reviews: [ 
//     {
//       logo: "/logo3.png",
//       rating: "5.0",
//       quote: "We have found TeloAI to be incredibly helpful since the point that we just started getting it all. We used the WhatsApp Agent to contact these patients in the waiting room and just to see an outcome of treatment cases we wouldn't have seen otherwise.",
//       author: "Regent Dental & Implant Clinic, Altrincham",
//       role: "Owner",
//     },
//     {
//       logo: "/vedio.png",
//       rating: "5.0",
//       quote: "", 
//       author: "Regent Dental",
//       role: "Treatment Coordinator",
//       isVideo: true,
//       thumbnail: "/vedio.png"
//     },
//     {
//       logo: "/logo2.png",
//       rating: "5.0",
//       quote: "TeloAI has allowed us to follow up, reactivate, and book in patients that would otherwise have fallen through the cracks. It's very easy to use and most of them are booked before we even know they've been reached out to because the messages go out automatically.",
//       author: "Aura Dental & Cosmetic Clinic",
//       role: "Head TCO",
//     },
//     {
//       logo: "/logo1.png",
//       rating: "5.0",
//       quote: "I've always loved keeping conversations on the go with leads, starting a conversation and seeing where it leads without being too pushy. TeloAI has given us the ability to focus on the patients in the practice whilst TeloAI deals with the leads that come in so that we don't miss any opportunities, generating more and more for the practice.",
//       author: "Thompson Dental, Lytham",
//       role: "Practice Manager",
//     }
//   ]
// };

export type ReviewCard = {
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

export type ReviewDataProps = {
  label: string;
  title: {
    before: string;
    highlight: string;
  };
  description: string;
  reviews: ReviewCard[]; // Expecting 4 reviews to fill the 2x2 grid
};

export const reviewData: ReviewDataProps = {
  label: "REVIEWS",
  title: {
    before: "What Dentists Are",
    highlight: "Saying.",
  },
  description: "Real results from practices using Wasup",
  reviews: [
    {
      logo: "/logo3.png", // Replace with your actual paths
      rating: 5.0,
      quote: "We had hundreds of cold leads build over the year that we just couldn't get hold of. We used the WhatsApp agent to contact these patients in the evening and managed to secure €40,000 of treatment that we wouldn't have seen otherwise",
      author: "Owner",
      role: "Owner",
      location: "Regent Dental & Implant Clinic, Yorkshire",
    },
    {
      logo: "/logo1.png",
      rating: 5.0,
      quote: "Patients message us at all hours, evenings, weekends, late at night, and before Wasup those would just sit until the next morning. Now they get a reply within seconds and most of them are booked in before we've even opened.",
      author: "Head PTO",
      role: "Head PTO",
      location: "NUYU Dentals & Asthetics, Bristol",
    },
    {
      logo: "/vedio.png",
      rating: 5.0,
      quote: "Video review context", // This is the video box
      author: "Treatment Coordinator",
      role: "Treatment Coordinator",
      location: "Regent Dental, Ilkley",
      isVideo: true,
      thumbnail: "/vedio.png", // The girl in the image
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXc", // Replace with actual video link
    },
    {
      logo: "/logo2.png",
      rating: 5.0,
      quote: "Its always tricky juggling consultations on the day with leads coming in and also contacting patients about their existing treatment plans. Wasup has given us the ability to focus on the patients in the practice whilst it deals with new leads.",
      author: "Practice Manager",
      role: "Practice Manager",
      location: "Thorpe Hesley Dental, Rotherham",
    },
  ],
};


// question
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
export const leadLossData: LeadLossSectionProps = {
  label: "THE NUMBERS",
  title: {
    before: "How many leads are you",
    highlight: "losing each month?"
  },
  description: "Ask yourself the questions on the right. If even a small percentage of those leads converted, what would that be worth to your practice — this month, this quarter, this year?",
  buttonText: "Find Out How Much You Could Recover",
  questions: [
    { number: "01", question: "How many enquiries come in after 5pm?", subtext: "Evenings & weekends" },
    { number: "02", question: "How many leads wait until the next day?", subtext: "Cold within hours" },
    { number: "03", question: "How many Meta or Google leads aren't followed up?", subtext: "Wasted ad spend" },
    { number: "04", question: "How many old enquiries sit untouched in your CRM?", subtext: "Untapped Revenue" }
  ]
};
// ....built]


export interface Feature {
  title: string;
  desc: string;
  icon: string;
}

export interface DentistrySectionProps {
  data: {
    label: string;
    title: {
      dark: string;
      highlight: string;
    };
    description: string;
    features: Feature[];
  };
}
export const dentistryData: DentistrySectionProps['data'] = {

    label: "BUILT FOR DENTISTRY",
    title: {
      dark: "Built for dentistry.",
      highlight: "Not generic automation."
    },
    description: "TeloAI is designed around the way UK dental practices actually work — supporting common treatment journeys and working alongside your existing systems.",
    features: [
      {
        title: "Dental treatment journeys",
        desc: "Built around how UK practices actually consult, qualify and book — not generic chatbot scripts.",
        icon: "/mak1.png"
      },
      {
        title: "Works with your stack",
        desc: "Connects with CRM platforms and Dentally to push enquiries straight into your existing workflow.",
        icon: "/mak2.png"
      },
      {
        title: "Trained on dental tone",
        desc: "Reassuring, professional, on-brand. TeloAI sounds like your best receptionist on her best day.",
        icon: "/mak3.png"
      },
      {
        title: "Hands over when it matters",
        desc: "Clinical questions or sensitive situations get passed to your team — never auto-answered.",
        icon: "/mak4.png"
      }
    ]
  }


  // faqs

  type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
    label: string
    title: {
      before: string
      highlight: string
    }
    questions: FAQItem[]
}
 export const faqData:FAQProps = {
  label: "FAQ",
  title: {
    before: "Questions",
    highlight: "answered"
  },
  questions: [
    {
      question: "Will patients know it's AI?",
      answer: "TeloAI is designed to feel helpful, clear and practice-branded — not robotic. Patients get fast answers, your team gets better-qualified enquiries, and your practice gets more from the leads you're already generating."
    },
    {
      question: "How quickly can we get set up?",
      answer: "Setup usually takes less than 24 hours. We handle the integration and testing for you."
    },
{
  question:"How quickly can we get set up?",
  answer:"TeloAI is designed to feel helpful, clear and practice-branded — not robotic. Patients get fast answers, your team gets better-qualified enquiries."
}
,
    {
      question: "Does it integrate with Dentally?",
      answer: "Setup usually takes less than 24 hours. We handle the integration and testing for you."
    },
{
  question:"What if a patient asks something clinical?",
  answer:"TeloAI is designed to feel helpful, clear and practice-branded — not robotic. Patients get fast answers, your team gets better-qualified enquiries."
}
  ,
  {
  question:"Can it work with our existing marketing?",
  answer:"TeloAI is designed to feel helpful, clear and practice-branded — not robotic. Patients get fast answers, your team gets better-qualified enquiries."
}
  ]
}