import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1160px] px-5 ${className}`}>{children}</div>
}

export function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div>
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ac2">{eyebrow}</p>
      <h2 className="text-[1.65rem] font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-mu">{text}</p>}
    </div>
  )
}

type Variant = 'primary' | 'ghost'
const base = 'inline-flex min-h-12 items-center justify-center rounded-xl border px-6 font-semibold transition duration-200'
const variants: Record<Variant, string> = {
  primary: 'border-ac bg-ac text-white shadow-[0_8px_24px_-8px_rgba(59,130,246,.6)] hover:-translate-y-px hover:bg-blue-600',
  ghost: 'border-line text-slate-100 hover:border-ac2',
}
export const btn = (v: Variant = 'primary', extra = '') => `${base} ${variants[v]} ${extra}`

export function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-ac/10 text-ac2">
      <Icon size={22} aria-hidden="true" />
    </div>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <article className={`rounded-2xl border border-line bg-gradient-to-b from-card to-bg2 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-ac hover:shadow-[0_16px_40px_-20px_rgba(59,130,246,.5)] ${className}`}>
      {children}
    </article>
  )
}
