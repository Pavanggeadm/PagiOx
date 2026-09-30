import { Container } from './ui'
import { SITE, SOCIALS } from '../config'

const link = 'py-1.5 text-mu hover:text-white'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-[1.35rem] font-extrabold tracking-tighter">Pagi<span className="text-ac2">Ox</span></div>
          <p className="text-sm text-mu">{SITE.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
          <a className={link} href="#services">Services</a>
          <a className={link} href="#about">About</a>
          <a className={link} href="#contact">Contact</a>
          <a className={link} href="#privacy">Privacy Policy</a>
        </nav>
        <ul aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-1">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              {s.href ? (
                <a className={link} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              ) : (
                <span className="inline-block py-1.5 text-mu/70" title="Coming soon">{s.label}</span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}
