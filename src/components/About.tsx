import { Container, SectionHead } from './ui'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container className="max-w-[820px]">
        <SectionHead eyebrow="About" title="Technology Should Work For You." />
        <p className="mt-3 text-mu">
          PagiOx is a growing IT support and digital services brand focused on solving real-world technology problems. We help individuals and small businesses get their devices, networks and software working properly, explain what went wrong in plain language, and build simple setups that are easier to live with.
        </p>
      </Container>
    </section>
  )
}
