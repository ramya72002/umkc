export const metadata = {
  title: 'UMKC: Skin Smart Campus Initiative',
  description: 'shines a light on skin cancer prevention, fostering a safer, healthier campus environment for all.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
