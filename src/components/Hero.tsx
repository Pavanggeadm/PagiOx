import { Container, btn } from './ui'

export default function Hero() {
  return (
    <section id="home" className="bg-[radial-gradient(60%_50%_at_80%_0,rgba(59,130,246,.18),transparent)] py-10 sm:py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
        <div>
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ac2">IT Support &amp; Digital Services</p>
          <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
            Technology Problems.{' '}
            <span className="bg-gradient-to-r from-blue-300 to-ac bg-clip-text text-transparent">Simply Solved.</span>
          </h1>
          <p className="mb-6 mt-4 max-w-[540px] text-base text-mu sm:mt-5 sm:text-lg">
            Reliable IT support for PCs, laptops, networks, Microsoft 365 and small businesses — without the technical headache.
          </p>
          <div className="flex flex-col gap-3 min-[520px]:flex-row">
            <a href="#contact" className={btn('primary')}>Get IT Support</a>
            <a href="#services" className={btn('ghost')}>Explore Services</a>
          </div>
          <p className="mt-5 text-sm text-mu">Fast Support • Practical Solutions • Small Business Friendly</p>
        </div>
        <div
          role="img"
          aria-label="Illustration of a diagnostic session finding and fixing a network fault"
          className="w-full overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,.8)]"
        >
          <div className="flex gap-1.5 border-b border-line px-3.5 py-3">
            <i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <div className="break-words p-4 font-mono text-[0.8rem] leading-8 sm:p-[18px] sm:text-sm">
            <div>&gt; pagiox diagnose --issue wifi</div>
            <div className="text-amber-400">! Signal drops detected</div>
            <div>&gt; checking router, DNS, drivers…</div>
            <div className="text-green-400">✓ Cause found: outdated adapter driver</div>
            <div className="text-green-400">✓ Fixed &amp; connection stable</div>
            <div>&gt; explaining the solution_</div>
          </div>
        </div>
      </Container>
    </section>
  )
}
