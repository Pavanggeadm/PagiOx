import { Container, SectionHead } from './ui'
import { PROBLEMS } from '../data'

export default function ProblemSolution() {
  return (
    <section className="border-y border-line bg-bg2 py-16 sm:py-20" aria-labelledby="problems">
      <Container>
        <SectionHead eyebrow="Sound familiar?" title="Problems we fix every day" />
        <ul id="problems" className="my-7 flex flex-wrap gap-2.5">
          {PROBLEMS.map((p) => (
            <li key={p} className="rounded-full border border-line bg-card px-4 py-2.5 text-[0.95rem]">{p}</li>
          ))}
        </ul>
        <p className="rounded-2xl border border-ac bg-ac/10 p-5 text-lg font-semibold">
          PagiOx finds the cause, fixes the issue and explains the solution.
        </p>
      </Container>
    </section>
  )
}
