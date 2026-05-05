
import Banner from "./banner";
import Practice from "./practice";
import Enquiry from "./enquiry";
import Recovery from "./recovery";
import { 
  problemData ,
  solutionData,
  stepsData,
  revenueData



 } from "@/constants/index1";
import Meet from "./meet";

const HomeMain = () => {
  return (
    <>
      <Banner />
      <Practice data={problemData } />
      <Meet data={solutionData} />
      <Enquiry data={stepsData} />
      <Recovery data={revenueData}/>
    
    </>
  );
};

export default HomeMain;
