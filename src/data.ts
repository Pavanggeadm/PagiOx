import {
  Monitor, Terminal, Wifi, Mail, Printer, Building2, Globe, PackageOpen,
  Search, MessageSquare, ShieldCheck, TrendingUp, type LucideIcon,
} from 'lucide-react'

export interface Item { icon?: LucideIcon; title: string; text: string }

export const SERVICES: Item[] = [
  { icon: Monitor, title: 'Desktop & Laptop Support', text: 'Hardware, performance and everyday device problems sorted out.' },
  { icon: Terminal, title: 'Windows & Software Troubleshooting', text: 'Errors, crashes and slow systems diagnosed and repaired.' },
  { icon: Wifi, title: 'Network & Wi-Fi Support', text: 'Stable connections at home and in the office.' },
  { icon: Mail, title: 'Microsoft 365 & Outlook', text: 'Email, sync and account issues resolved.' },
  { icon: Printer, title: 'Printer & Peripheral Support', text: 'Printers, scanners and accessories working again.' },
  { icon: Building2, title: 'Small Business IT Support', text: 'Practical support for small teams and offices.' },
  { icon: Globe, title: 'Website Development', text: 'Responsive business websites, domains and hosting guidance.' },
  { icon: PackageOpen, title: 'PC Setup & Deployment', text: 'New computers configured and ready to use.' },
]

export const WHY: Item[] = [
  { icon: Search, title: 'Practical Troubleshooting', text: 'We look for the real cause instead of guessing.' },
  { icon: MessageSquare, title: 'Clear Communication', text: 'Plain-language explanations, no jargon.' },
  { icon: ShieldCheck, title: 'Reliable Support', text: 'Straightforward help you can count on.' },
  { icon: TrendingUp, title: 'Long-Term IT Thinking', text: 'Fixes and setups that hold up over time.' },
]

export const STEPS = [
  { n: '01', title: 'Tell Us the Problem', text: "Describe what's happening." },
  { n: '02', title: 'Diagnose the Issue', text: 'We trace the underlying cause.' },
  { n: '03', title: 'Fix & Configure', text: 'We resolve it and set things up properly.' },
  { n: '04', title: 'Follow Up', text: 'We check everything is still running well.' },
]

export const PROBLEMS = [
  'PC not working?', 'Wi-Fi keeps disconnecting?', 'Outlook not syncing?',
  'Printer stopped working?', 'Need computers configured for a new office?',
]

export const BUSINESS_POINTS = [
  'Computer setup', 'Network setup', 'Printer configuration', 'Microsoft 365',
  'Software installation', 'User support', 'Basic IT maintenance',
]
