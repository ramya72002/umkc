export const metadata = {
  title: 'UMKC: Skin Smart Campus Initiative',
  description: 'shines a light on skin cancer prevention, fostering a safer, healthier campus environment for all.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import CancerFacts from '@/components/cancerFacts'
import CancerPrevention from '@/components/CancerPrevention'
import UvIndex from '@/components/uvIndex'
import EarlyDetection from '@/components/earlyDetection'
import ResourcesLinks from '@/components/resourcesLinks'

export default function Home() {
  return (
    <>
      <Hero />
      <CancerFacts/>
      <CancerPrevention/>
      <UvIndex/>
      <EarlyDetection/>
      <ResourcesLinks/>
      
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
