import { Container, SectionHead, Card } from './ui'
import { STEPS } from '../data'

export default function Process() {
  return (
    <section id="process" className="border-y border-line bg-bg2 py-16 sm:py-20">
      <Container>
        <SectionHead eyebrow="Process" title="How It Works" />
        <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n}>
              <Card className="h-full">
                <div className="text-3xl font-extrabold text-ac" aria-hidden="true">{s.n}</div>
                <h3 className="mt-1 text-[1.1rem] font-semibold leading-tight"><span className="sr-only">Step {s.n}: </span>{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-mu">{s.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
