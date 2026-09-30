import { useState, type FormEvent } from 'react'
import { MessageCircle } from 'lucide-react'
import { Container, SectionHead, btn } from './ui'
import { SERVICES } from '../data'
import { WHATSAPP_NUMBER } from '../config'
import { submitContact, type ContactData } from '../lib/submitContact'

type Errors = Partial<Record<keyof ContactData, string>>
type Status = 'idle' | 'sending' | 'not-configured' | 'sent' | 'error'

const empty: ContactData = { name: '', business: '', email: '', phone: '', service: '', message: '' }

function validate(d: ContactData): Errors {
  const e: Errors = {}
  if (d.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = 'Enter a valid email address.'
  if (d.phone.trim() && !/^[+\d\s()-]{7,}$/.test(d.phone.trim())) e.phone = 'Enter a valid phone number.'
  if (!d.service) e.service = 'Please choose a service.'
  if (d.message.trim().length < 10) e.message = 'Please add a few more details (10+ characters).'
  return e
}

const fieldCls = 'min-h-12 w-full rounded-[10px] border bg-bg2 px-3.5 py-3 text-base text-slate-100 focus:outline-2 focus:outline-ac2'

interface FieldProps {
  id: keyof ContactData
  label: string
  required?: boolean
  error?: string
  children: (props: { id: string; className: string; 'aria-invalid': boolean; 'aria-describedby'?: string; 'aria-required'?: boolean }) => React.ReactNode
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm">{label}{required && ' *'}</label>
      {children({
        id,
        className: `${fieldCls} ${error ? 'border-red-400' : 'border-line'}`,
        'aria-invalid': !!error,
        'aria-describedby': error ? `${id}-err` : undefined,
        'aria-required': required,
      })}
      <p id={`${id}-err`} className="mt-1 min-h-[1.1em] text-[0.82rem] text-red-400">{error}</p>
    </div>
  )
}

export default function Contact() {
  const [data, setData] = useState<ContactData>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof ContactData) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(data)
    setErrors(errs)
    setStatus('idle')
    const first = Object.keys(errs)[0]
    if (first) return document.getElementById(first)?.focus()
    setStatus('sending')
    const result = await submitContact(data)
    setStatus(result)
    if (result === 'sent') setData(empty)
  }

  return (
    <section id="contact" className="border-t border-line bg-bg2 py-16 sm:py-20">
      <Container className="max-w-[820px]">
        <SectionHead eyebrow="Contact" title="Get IT Support" text="Tell us what's going wrong and we'll get back to you." />
        <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Name" required error={errors.name}>
              {(p) => <input {...p} autoComplete="name" value={data.name} onChange={set('name')} />}
            </Field>
            <Field id="business" label="Business Name" error={errors.business}>
              {(p) => <input {...p} autoComplete="organization" value={data.business} onChange={set('business')} />}
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="email" label="Email" required error={errors.email}>
              {(p) => <input {...p} type="email" autoComplete="email" value={data.email} onChange={set('email')} />}
            </Field>
            <Field id="phone" label="Phone" error={errors.phone}>
              {(p) => <input {...p} type="tel" autoComplete="tel" value={data.phone} onChange={set('phone')} />}
            </Field>
          </div>
          <Field id="service" label="Service Required" required error={errors.service}>
            {(p) => (
              <select {...p} value={data.service} onChange={set('service')}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
            )}
          </Field>
          <Field id="message" label="Message" required error={errors.message}>
            {(p) => <textarea {...p} rows={5} value={data.message} onChange={set('message')} />}
          </Field>
          <button type="submit" disabled={status === 'sending'} className={btn('primary', 'w-full disabled:opacity-60 sm:w-auto sm:justify-self-start')}>
            {status === 'sending' ? 'Sending…' : 'Send Request'}
          </button>
          <div role="status" aria-live="polite">
            {status === 'sent' && <p className="rounded-[10px] border border-green-400 bg-green-400/10 p-3.5">Thanks — your request has been sent.</p>}
            {status === 'not-configured' && (
              <p className="rounded-[10px] border border-amber-400 bg-amber-400/10 p-3.5">
                Your details are valid, but the contact form isn't connected yet, so nothing was sent. Please contact us another way for now.
              </p>
            )}
            {status === 'error' && <p className="rounded-[10px] border border-red-400 bg-red-400/10 p-3.5">Something went wrong. Please try again.</p>}
          </div>
        </form>
        <p className="mt-7 text-mu">Prefer WhatsApp?</p>
        {WHATSAPP_NUMBER ? (
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={btn('ghost', 'mt-2.5 w-full gap-2 sm:w-auto')}>
            <MessageCircle size={18} aria-hidden="true" />Chat on WhatsApp
          </a>
        ) : (
          <button type="button" disabled aria-label="WhatsApp not configured yet" className={btn('ghost', 'mt-2.5 w-full cursor-not-allowed gap-2 opacity-60 sm:w-auto')}>
            <MessageCircle size={18} aria-hidden="true" />WhatsApp coming soon
          </button>
        )}
      </Container>
    </section>
  )
}
