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
  stats: RevenueStat[];
  buttonText: string;
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