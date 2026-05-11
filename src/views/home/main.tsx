
import Banner from "./banner";
import Practice from "./practice";
import Enquiry from "./enquiry";
import Recovery from "./recovery";
import Cases from "./cases";
import { 
  problemData ,
  solutionData,
  stepsData,
  revenueData,
  useCaseData,
  pricingData,
  reviewData,
  leadLossData,
  dentistryData,
  faqData,
  revenueData2,

 } from "@/constants/index1";
import Meet from "./meet";
import Pricing from "./pricing";
import What from "./what";
import Question from "./question";
import Built from "./built";
import FAQ from "./faqs";
import TellUsAbout from "./form";
const HomeMain = () => {
  return (
    <>
      <Banner />
      <Practice data={problemData } />
      <Meet data={solutionData} />
      <Enquiry data={stepsData} />
      <Recovery data={revenueData}/>
      <Cases data={useCaseData}/>
      <Pricing data={pricingData} />
      {/* .... */}
      <What data={reviewData} />
      <Question data={leadLossData} />
      <Built data={dentistryData}/>
      <FAQ data={faqData} />
      <Recovery data={revenueData2}/>
      <TellUsAbout/>
    </>
  );
};

export default HomeMain;
