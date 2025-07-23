import {DRIVEWAY_CLEANING_DATA } from '@/constants'
import SingleServiceDetailsPage from '@/pages/single-service-details-page'


const DrivewayCleaningPage = () => {
  return (
   <SingleServiceDetailsPage activeService="driveway-cleaning" serviceData={DRIVEWAY_CLEANING_DATA}/>
  )
}

export default DrivewayCleaningPage