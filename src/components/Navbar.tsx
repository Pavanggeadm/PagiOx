import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../config'
import { btn } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-16 w-full max-w-[1160px] items-center justify-between px-5">
        <a href="#home" aria-label="PagiOx home" className="text-[1.35rem] font-extrabold tracking-tighter">
          Pagi<span className="text-ac2">Ox</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.95rem] text-mu hover:text-white">{l.label}</a>
          ))}
          <a href="#contact" className={btn('primary', 'min-h-[42px]')}>Get IT Support</a>
        </nav>
        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-xl border border-line lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="flex flex-col gap-1 border-t border-line px-5 pb-5 pt-2 lg:hidden">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-3.5">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className={btn('primary', 'mt-3')}>Get IT Support</a>
        </nav>
      )}
    </header>
  )
}
