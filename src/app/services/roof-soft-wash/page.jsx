import { ROOF_SOFT_WASH_DATA } from '@/constants'
import SingleServiceDetailsPage from '@/pages/single-service-details-page'


const RoofSoftWashPage = () => {
  return (
   <SingleServiceDetailsPage activeService="roof-soft-wash" serviceData={ROOF_SOFT_WASH_DATA}/>
  )
}

export default RoofSoftWashPage