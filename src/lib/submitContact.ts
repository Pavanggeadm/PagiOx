import { FORM_ENDPOINT } from '../config'

export interface ContactData {
  name: string
  business: string
  email: string
  phone: string
  service: string
  message: string
}

export type SubmitResult = 'sent' | 'not-configured' | 'error'

/**
 * Single place to connect a real backend.
 * - Formspree: set FORM_ENDPOINT in src/config.ts (works as-is).
 * - EmailJS / custom API: replace the fetch below with your call.
 */
export async function submitContact(data: ContactData): Promise<SubmitResult> {
  if (!FORM_ENDPOINT) return 'not-configured'
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    return res.ok ? 'sent' : 'error'
  } catch {
    return 'error'
  }
}
