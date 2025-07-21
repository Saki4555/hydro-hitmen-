import ServiceHero from '@/components/service-page-components/service-hero'
import { ServicesBentoGrid } from '@/components/service-page-components/services-bento-grid'
import React from 'react'

const ServicePageContents = () => {
  return (
    <>
    <ServiceHero />
      <ServicesBentoGrid />
    </>
  )
}

export default ServicePageContents