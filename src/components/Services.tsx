import { Container, SectionHead, Card, IconBox } from './ui'
import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHead eyebrow="Services" title="IT Support That Solves the Problem" text="Practical help for everyday technology, at home and at the office." />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon, title, text }) => (
            <Card key={title}>
              {icon && <IconBox icon={icon} />}
              <h3 className="text-[1.1rem] font-semibold leading-tight">{title}</h3>
              <p className="mt-2 text-[0.95rem] text-mu">{text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
