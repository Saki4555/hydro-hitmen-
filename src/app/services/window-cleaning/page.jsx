import { WINDOW_CLEANING_DATA } from '@/constants'
import SingleServiceDetailsPage from '@/pages/single-service-details-page'


const WindowCleaningPage = () => {
  return (
    <SingleServiceDetailsPage activeService="window-cleaning" serviceData={WINDOW_CLEANING_DATA}/>
  )
}

export default WindowCleaningPage