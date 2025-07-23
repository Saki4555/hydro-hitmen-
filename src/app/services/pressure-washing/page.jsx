import { PRESSURE_WASHING_DATA } from "@/constants";
import SingleServiceDetailsPage from "@/pages/single-service-details-page";



const PressureWashingPage = () => {
  return (
    <>
     <SingleServiceDetailsPage activeService="pressure-washing" serviceData={PRESSURE_WASHING_DATA}/>
      
    </>
  );
};

export default PressureWashingPage;
