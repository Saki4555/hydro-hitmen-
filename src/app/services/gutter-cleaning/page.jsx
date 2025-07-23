import { GUTTER_CLEANING_DATA } from '@/constants'
import SingleServiceDetailsPage from '@/pages/single-service-details-page'

const GutterCleaningPage = () => {
  return (
   <SingleServiceDetailsPage activeService="gutter-cleaning" serviceData={GUTTER_CLEANING_DATA}/>
  )
}

export default GutterCleaningPage