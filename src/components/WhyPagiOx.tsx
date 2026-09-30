import { Container, SectionHead, Card, IconBox } from './ui'
import { WHY } from '../data'

export default function WhyPagiOx() {
  return (
    <section id="why" className="py-16 sm:py-20">
      <Container>
        <SectionHead eyebrow="Why PagiOx" title="Support that makes sense" />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon, title, text }) => (
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
