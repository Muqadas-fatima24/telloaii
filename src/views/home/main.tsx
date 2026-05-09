
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
  dentistryData

 } from "@/constants/index1";
import Meet from "./meet";
import Pricing from "./pricing";
import What from "./what";
import Question from "./question";
import Built from "./built";
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
      {/* <What data={reviewData} />
      <Question data={leadLossData} />
      <Built data={dentistryData}/> */}
    </>
  );
};

export default HomeMain;
