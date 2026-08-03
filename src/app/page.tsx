import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { TechStack } from '@/components/sections/TechStack'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </>
  )
}
