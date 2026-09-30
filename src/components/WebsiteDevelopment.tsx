import { Container, btn } from './ui'

export default function WebsiteDevelopment() {
  return (
    <section className="border-y border-line bg-bg2 py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-line bg-gradient-to-b from-card to-bg2 p-6 sm:p-8">
          <h2 className="text-[1.65rem] font-bold leading-tight tracking-tight sm:text-4xl">Need a Website Too?</h2>
          <p className="mb-6 mt-3 text-base text-mu sm:text-[1.05rem]">
            PagiOx also helps small businesses establish a professional online presence with responsive business websites, domain setup and hosting guidance.
          </p>
          <a href="#contact" className={btn('primary', 'w-full sm:w-auto')}>Build My Website</a>
        </div>
      </Container>
    </section>
  )
}
