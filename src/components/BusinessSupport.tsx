import { Check } from 'lucide-react'
import { Container, SectionHead, btn } from './ui'
import { BUSINESS_POINTS } from '../data'

export default function BusinessSupport() {
  return (
    <section className="py-16 sm:py-20" >
      <Container className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Business" title="IT Support for Growing Businesses" text="PagiOx can help small offices get technology working and keep it that way." />
        </div>
        <div>
          <ul className="mb-7 grid gap-2.5">
            {BUSINESS_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2.5"><Check size={18} className="shrink-0 text-ac2" aria-hidden="true" />{p}</li>
            ))}
          </ul>
          <a href="#contact" className={btn('primary', 'w-full sm:w-auto')}>Discuss Your IT Needs</a>
        </div>
      </Container>
    </section>
  )
}
