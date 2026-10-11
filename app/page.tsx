'use client'

import { AnimatePresence, motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  CircleCheck,
  ClipboardList,
  FileBarChart,
  Globe2,
  Menu,
  MessageCircle,
  Pause,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

import { Pricing } from '@/components/ui/pricing'
import { Testimonials } from '@/components/ui/testimonials-13'
import Faq05 from '@/components/ui/faq-05'

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#top" className="flex items-center gap-2.5" aria-label="Insyt by Esoko home"><img src="/images/insyt-logo.webp" alt="Insyt" className="size-9 object-contain" /><span className={`text-[15px] font-semibold tracking-[-0.03em] ${light ? 'text-white' : 'text-navy'}`}>Insyt <span className={light ? 'text-white/65' : 'text-blue'}>by Esoko</span></span></a>
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy: string; light?: boolean }) { return <motion.div {...reveal} className="max-w-2xl"><p className={`eyebrow ${light ? 'text-orange' : 'text-blue'}`}>{eyebrow}</p><h2 className={`mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2><p className={`mt-5 max-w-xl text-base leading-7 ${light ? 'text-white/65' : 'text-slate'}`}>{copy}</p></motion.div> }

const trustedOrganizations = [
  { name: 'UNDP', src: 'https://www.adaptation-fund.org/wp-content/uploads/2017/07/Youth-as-agents-of-Community-Development-United-Nations-Development-Programme.jpg' },
  { name: 'UNICEF', src: 'https://mdri.org.vn/wp-content/uploads/2021/05/unicef-logo-768x163.png' },
  { name: 'WHO', src: 'https://disinfectright.com/wp-content/uploads/2021/09/Who21.png' },
  { name: 'CARE', src: 'https://static.boerse.de/images/Firmenlogos/firmenlogo_CH0244767585.png' },
  { name: 'GIZ', src: '/images/GIZ_logo-Ds2CRv9L.png' },
  { name: 'Bio-Innovation Zimbabwe', src: '/images/BIZ_logo-CYMaWA8p.png' },
  { name: 'Plan International', src: '/images/PlanInt_logo-vaF_Owwu.png' },
]

// TODO: replace with the real Insyt/Esoko destinations before launch.
const CONTACT_EMAIL = 'info@esoko.com'
const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`
const PRIVACY_HREF = `mailto:${CONTACT_EMAIL}?subject=Privacy%20request`

// TODO: add the App Store link when the iOS release is available.
const ANDROID_APP_HREF = 'https://play.google.com/store/apps/details?id=com.esoko.insyt.app&hl=en'

const footerColumns: [string, ...string[]][] = [
  ['Product', 'Platform', 'Android app'],
  ['Company', 'About Esoko', 'Contact'],
  ['Legal', 'Privacy'],
]
const footerHref: Record<string, string> = {
  Platform: '#platform',
  'Android app': ANDROID_APP_HREF,
  'About Esoko': 'https://www.esoko.com/',
  Contact: CONTACT_HREF,
  Privacy: PRIVACY_HREF,
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/esoko/', path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z' },
  { name: 'Facebook', href: 'https://web.facebook.com/EsokoNews', path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.68 4.53-4.68 1.31 0 2.68.23 2.68.23v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z' },
  { name: 'YouTube', href: 'https://www.youtube.com/@esokonetworks', path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z' },
  { name: 'Instagram', href: 'https://www.instagram.com/esoko_news?igsh=MXU2MGdpeTF4N3hhOA%3D%3D&utm_source=qr', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1 1.44-1.44 1.44 1.44 0 0 1-1.44 1.44z' },
  { name: 'X', href: 'https://x.com/esoko?s=11', path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
]

const pricingPlans = [
  { name: 'STARTER', price: '50', yearlyPrice: '40', period: 'per month', features: ['Up to 10 forms', '1,000 responses / month', 'Basic analytics', '48-hour support response time', 'Limited API access', 'Community support'], description: 'Perfect for individuals and small projects', buttonText: 'Get started', href: 'https://sso.esoko.com/en/signup', isPopular: false },
  { name: 'PROFESSIONAL', price: '99', yearlyPrice: '79', period: 'per month', features: ['Unlimited forms', 'Unlimited responses', 'Advanced analytics', '24-hour support response time', 'Full API access', 'Priority support', 'Team collaboration', 'Custom integrations'], description: 'Ideal for growing teams and businesses', buttonText: 'Get started', href: 'https://sso.esoko.com/en/signup', isPopular: true },
  { name: 'ENTERPRISE', price: 'Custom', yearlyPrice: 'Custom', period: 'per month', features: ['Everything in Professional', 'Custom solutions', 'Dedicated account manager', '1-hour support response time', 'SSO Authentication', 'Advanced security', 'Custom contracts', 'SLA agreement'], description: 'For large organizations with specific needs', buttonText: 'Contact Sales', href: CONTACT_HREF, isPopular: false },
]

function TrustSection() { return <section className="overflow-hidden border-y border-[#dce5ee] bg-white px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><motion.p {...reveal} className="text-center text-[11px] font-semibold uppercase tracking-[.18em] text-slate">Trusted by leading organizations worldwide</motion.p><motion.div {...reveal} transition={{ ...reveal.transition, delay: .1 }} className="logo-marquee mt-10"><div className="inline-flex min-w-max items-center gap-16 animate-scroll">{[...trustedOrganizations, ...trustedOrganizations].map((organization, index) => <img key={`${organization.name}-${index}`} src={organization.src} alt={organization.name} className="h-12 w-auto max-w-[150px] object-contain opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0" />)}</div></motion.div></div></section> }


const insytKnowledge: { keywords: string[]; answer: string }[] = [
  { keywords: ['price', 'pricing', 'plan', 'plans', 'cost', 'costs', 'pay', 'payment', 'subscription', 'subscribe', 'monthly', 'annual', 'how much', 'expensive', 'starter', 'professional', 'enterprise'], answer: 'Insyt has three plans: Starter, Professional, and Enterprise, billed monthly or annually. They are built around the scale of your research; see the pricing section above or contact Esoko for a tailored setup.' },
  { keywords: ['offline', 'sync', 'synchronise', 'synchronize', 'internet', 'connection', 'connectivity', 'without internet', 'no network'], answer: 'In offline mode, responses are stored safely on the device and synced automatically once an internet connection returns, so fieldwork never has to stop.' },
  { keywords: ['security', 'secure', 'privacy', 'private', 'safe', 'gdpr', 'compliance', 'data protection'], answer: `Insyt treats data security and privacy seriously, and responses are handled under Esoko’s policies. For specific compliance or security questions, contact the Esoko team at ${CONTACT_EMAIL}.` },
  { keywords: ['contact', 'esoko', 'support', 'help', 'demo', 'sales', 'talk', 'reach'], answer: `For larger or tailored setups, reach the Esoko team at ${CONTACT_EMAIL} and we’ll help you find the right plan.` },
  { keywords: ['industry', 'industries', 'use case', 'use cases', 'research', 'monitoring', 'evaluation', 'stock', 'tracking', 'certification', 'agriculture', 'health', 'market research'], answer: 'Use Insyt for market research, monitoring and evaluation, stock tracking, certification, and any other data collection exercise that depends on quality field data.' },
  { keywords: ['quality', 'skip', 'logic', 'validation', 'error', 'errors', 'accuracy', 'accurate', 'rule', 'rules', 'mistake'], answer: 'Insyt improves data quality and minimizes field errors using skip logic and validation rules, so responses are guided and mistakes are caught before they reach your dataset.' },
  { keywords: ['share', 'access', 'code', 'collector', 'collectors', 'team', 'mobile', 'app', 'enumerator', 'distribute'], answer: 'Share an access code with your data collectors so they can fill your form wherever they are through the Insyt mobile app. Responses come back to you as they are submitted.' },
  { keywords: ['response', 'responses', 'manage', 'download', 'export', 'exports', 'real time', 'realtime', 'formats', 'csv', 'excel', 'report', 'reporting', 'analytics'], answer: 'You can view and manage incoming responses as they arrive, then download your data in different formats for further analysis or to share with your team.' },
  { keywords: ['create', 'form', 'forms', 'build', 'builder', 'question', 'questions', 'types', 'gps', 'image', 'survey', 'surveys', 'template', 'section'], answer: 'Create any form online with question types ranging from text and images to GPS location, choices, and more. Start from a blank form or a template, then organize questions into sections.' },
  { keywords: ['work', 'works', 'working', 'steps', 'process', 'stages', 'workflow', 'flow'], answer: 'Insyt has six simple stages: create your account, build a form online, improve data quality with skip logic and validation, share an access code with data collectors, collect responses online or offline, then view, manage, and download your data.' },
  { keywords: ['account', 'sign up', 'signup', 'register', 'start', 'begin', 'get started', 'onboarding'], answer: 'Create an account at sso.esoko.com to start building your first form. From there you can add questions, invite data collectors, and collect responses.' },
  { keywords: ['what is insyt', 'about insyt', 'overview', 'platform', 'product'], answer: 'Insyt is a simple, fast, and flexible web and mobile platform for collecting quality data from anywhere in the world, at any time. You build forms online, collect responses through the Insyt mobile app, and manage everything in one connected workspace.' },
]

function insytReply(question: string): string {
  const q = question.toLowerCase()
  if (/(^|\b)(hi|hello|hey|thanks|thank you)\b/.test(q)) return 'Hi! Ask me anything about Insyt: what it does, how to build a form, offline collection, plans, and more.'
  const words = q.split(/[^a-z0-9]+/).filter(Boolean)
  let best: (typeof insytKnowledge)[number] | null = null
  let bestScore = 0
  for (const topic of [...insytKnowledge, ...faqKnowledge]) {
    let score = 0
    for (const keyword of topic.keywords) {
      if (keyword.includes(' ')) { if (q.includes(keyword)) score += 2 }
      else if (words.includes(keyword)) score += 1
      else if (q.includes(keyword)) score += 0.5
    }
    if (score > bestScore) { bestScore = score; best = topic }
  }
  if (best && bestScore >= 1) return best.answer
  return `I’m not sure about that one. I can help with how Insyt works, creating forms, offline collection, sharing access codes, pricing, free trials, security, and the upcoming AI form builder. You can also reach the Esoko team at ${CONTACT_EMAIL}.`
}

// TODO: replace these answers with Esoko's approved copy (free tier, data storage/security, and the KoBoToolbox/ODK comparison).
const faqs: { question: string; answer: string }[] = [
  { question: 'Is there a free trial or free tier?', answer: 'Insyt starts with a self-serve Starter plan, and annual billing saves 20%. If you would like to evaluate Insyt for a larger team before committing, contact us and we will help you get set up.' },
  { question: 'Where is my data stored and how is it secured?', answer: `Responses are handled under Esoko’s data protection and security policies. For details on where your data is stored, or specific compliance questions, contact the Esoko team at ${CONTACT_EMAIL}.` },
  { question: 'How is Insyt different from other data collection tools?', answer: 'Insyt is a managed, no-setup platform. You build forms online, collect responses through the offline-capable Insyt mobile app, and share access codes with your team, all backed by Esoko’s field support, so you can start collecting without maintaining your own server.' },
  { question: 'Do respondents need the app?', answer: 'No. Share the web link and they can respond in a browser while online. Use the Android app for offline collection and for field teams.' },
  { question: 'Can I build forms with AI?', answer: "An AI form builder is in development. You'll describe the form you want and refine it by chatting with the AI. Contact us to hear when it's available." },
]

// The guide bot also answers the on-page FAQ. Answers are read from the faqs
// array above so the two never drift out of sync.
const faqKnowledge: { keywords: string[]; answer: string }[] = [
  { keywords: ['free trial', 'free tier', 'free', 'trial', 'evaluate', 'test', 'try'], answer: faqs[0].answer },
  { keywords: ['where is my data', 'data stored', 'stored', 'storage', 'hosted', 'hosting', 'secure', 'security', 'privacy', 'gdpr', 'compliance', 'data protection'], answer: faqs[1].answer },
  { keywords: ['different', 'difference', 'compare', 'comparison', 'versus', 'vs', 'alternatives', 'kobotoolbox', 'kobo', 'odk', 'other tools', 'why insyt'], answer: faqs[2].answer },
  { keywords: ['need the app', 'respondents need', 'do respondents', 'respondent', 'respondents', 'install the app', 'download the app', 'browser', 'web link', 'without the app'], answer: faqs[3].answer },
  { keywords: ['build forms with ai', 'form builder ai', 'ai form', 'with ai', 'ai', 'artificial intelligence', 'generate a form'], answer: faqs[4].answer },
]

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([])
  const [chatTyping, setChatTyping] = useState(false)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const stepRef = useRef(null)
  const stepInView = useInView(stepRef, { once: true })
  const steps = [{ icon: Globe2, title: 'Create your account', copy: 'Create an account at sso.esoko.com to start building your first form.' }, { icon: ClipboardList, title: 'Create any form online', copy: 'Build forms with text, image, GPS location, and many more question types.' }, { icon: ShieldCheck, title: 'Improve data quality', copy: 'Use skip logic and validation rules to minimize errors before they reach your dataset.' }, { icon: Users, title: 'Share with data collectors', copy: 'Publish your form, then share the access code for the app or the web link for any browser.' }, { icon: Send, title: 'Collect responses, online or offline', copy: "Use the Android app when there's no signal. The web link needs an internet connection." }, { icon: FileBarChart, title: 'Manage and download data', copy: 'View incoming data and download it in different formats for analysis or sharing.' }]
  const chatScrollRef = useRef<HTMLDivElement>(null)
  const sendMessage = (text: string) => { const trimmed = text.trim(); if (!trimmed) return; setChatMessages((prev) => [...prev, { role: 'user', text: trimmed }]); setChatInput(''); setChatTyping(true); window.setTimeout(() => { setChatMessages((prev) => [...prev, { role: 'bot', text: insytReply(trimmed) }]); setChatTyping(false) }, 600) }
  useEffect(() => { chatScrollRef.current?.scrollTo({ top: chatScrollRef.current.scrollHeight, behavior: 'smooth' }) }, [chatMessages, chatTyping, chatOpen])
  return <div id="top" className="min-h-screen overflow-x-hidden bg-cream text-navy">
    <header className="absolute inset-x-0 top-0 z-30"><div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-5 lg:px-8"><Brand light /><nav className="hidden items-center gap-7 lg:flex"><a href="#platform" className="nav-link">Product</a><a href="#how" className="nav-link">How it works</a><a href="#pricing" className="nav-link">Pricing</a></nav><div className="hidden items-center gap-5 lg:flex"><a href="https://sso.esoko.com/en/signin" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white/75 hover:text-white">Sign in</a><a href="https://sso.esoko.com/en/signup" target="_blank" rel="noreferrer" className="nav-cta">Get started <ArrowRight /></a></div><button className="grid size-10 place-items-center rounded-full border border-white/20 text-white lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</button></div>{mobileOpen && <div className="mx-4 rounded-2xl border border-white/10 bg-[#0b3772] p-5 shadow-xl lg:hidden"><nav className="flex flex-col gap-5"><a onClick={() => setMobileOpen(false)} href="#platform" className="text-sm font-semibold text-white">Product</a><a onClick={() => setMobileOpen(false)} href="#how" className="text-sm font-semibold text-white">How it works</a><a onClick={() => setMobileOpen(false)} href="#pricing" className="text-sm font-semibold text-white">Pricing</a><a href="https://sso.esoko.com/en/signin" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white">Sign in</a><a href="https://sso.esoko.com/en/signup" target="_blank" rel="noreferrer" className="nav-cta text-center">Get started <ArrowRight /></a></nav></div>}</header>
    <main>
      <section className="hero-section"><div className="hero-glow" /><div className="mx-auto grid max-w-[88rem] items-center gap-14 px-5 pb-20 pt-24 lg:grid-cols-[.6fr_1.4fr] lg:px-8 lg:pb-28 lg:pt-28"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="relative z-10"><div className="eyebrow text-orange">The web and mobile field data platform</div><h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[.98] tracking-[-0.07em] text-white sm:text-7xl">Collect quality data.<br /><span className="text-white/55">Anywhere, anytime.</span></h1><p className="mt-7 max-w-md text-base leading-7 text-white/65">Build your form online, publish it, and share an access code or web link. Collect responses on the Insyt Android app, even offline, or in any browser, and track them as they arrive.</p><div className="mt-9 flex flex-wrap items-start gap-x-6 gap-y-5"><div><a href="https://sso.esoko.com/en/signup" target="_blank" rel="noreferrer" className="hero-button">Get started <ArrowRight /></a><p className="mt-2 text-[11px] text-white/60">For setting up forms on the web</p></div><div><a href={ANDROID_APP_HREF} target="_blank" rel="noreferrer" className="inline-block" aria-label="Get the Insyt Android app on Google Play"><img src="/images/google-play-badge.png" alt="Get it on Google Play" className="h-12 w-auto" /></a><p className="mt-2 text-[11px] text-white/60">For data collectors</p></div></div><div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/70"><span className="flex items-center gap-2"><CircleCheck className="text-orange" /> Built for field teams</span><span className="flex items-center gap-2"><CircleCheck className="text-orange" /> Offline collection in the Android app</span><span className="flex items-center gap-2"><CircleCheck className="text-orange" /> Free for data collectors</span></div></motion.div><motion.div initial={{ opacity: 0, y: 35, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, delay: .15 }} className="relative z-10"><img className="hero-image" src="/images/insyt-survey-dashboard-mockup.png" alt="Insyt Community Survey dashboard with the form builder, response table, live map, and the mobile app" /></motion.div></div></section>
      <TrustSection />
      <section id="platform" className="bg-cream px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><p className="eyebrow text-center text-blue">See Insyt in action</p><motion.div {...reveal} className="mt-10"><div className="video-frame video-frame-platform"><div className="hero-youtube-frame"><iframe src="https://www.youtube.com/embed/Oj4WqYfG2Ag?autoplay=1&mute=1&loop=1&playlist=Oj4WqYfG2Ag&rel=0&cc_load_policy=1" title="Insyt platform walkthrough" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div></div></motion.div><div className="mt-10 flex justify-center"><a href="https://sso.esoko.com/en/signup" target="_blank" rel="noreferrer" className="hero-button">Get started <ArrowRight /></a></div></div></section>
      <section id="how" className="bg-cream px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><SectionHeading eyebrow="How Insyt works" title="A better rhythm for field data." copy="Six simple stages. One connected flow. Built for market research, monitoring and evaluation, stock tracking, certification, and any other data collection exercise." /><div className="mt-8 flex items-center gap-3"><button onClick={() => setPlaying(!playing)} className="grid size-10 place-items-center rounded-full border border-white/20 text-white hover:border-orange" aria-label={playing ? 'Pause animation' : 'Play animation'}>{playing ? <Pause /> : <Play />}</button><button onClick={() => setStep(0)} className="text-xs font-semibold text-white/60 hover:text-white">Replay sequence</button></div></div><div ref={stepRef} className="relative">{stepInView && playing && <AutoStep onStep={setStep} />}{steps.map((item, i) => { const Icon = item.icon; return <motion.button key={item.title} onClick={() => { setPlaying(false); setStep(i) }} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * .12 }} className={`group relative grid w-full grid-cols-[50px_1fr] gap-5 border-b border-white/10 py-5 text-left first:border-t ${step === i ? 'opacity-100' : 'opacity-45 hover:opacity-80'}`}><div className={`relative z-10 grid size-11 place-items-center rounded-xl border ${step === i ? 'border-orange bg-orange text-white' : 'border-white/20 text-white'}`}><Icon /></div><div><div className="flex items-center gap-3"><span className="text-[10px] font-semibold tracking-[.16em] text-orange">0{i + 1}</span><h3 className="text-lg font-semibold text-white">{item.title}</h3></div><AnimatePresence>{step === i && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-2 max-w-md text-sm leading-6 text-white/55">{item.copy}</motion.p>}</AnimatePresence></div></motion.button> })}</div></div></div></section>
      <section id="app" className="bg-white px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16"><motion.div {...reveal}><p className="eyebrow text-blue">Insyt mobile app</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-navy sm:text-5xl">Collect responses in the field, even offline.</h2><p className="mt-5 max-w-lg text-base leading-7 text-slate">Data collectors download the free Insyt app, open your form with an access code, and submit responses online or offline. Everything syncs back to your workspace automatically.</p><p className="mt-4 max-w-lg text-base leading-7 text-slate">Don&apos;t need offline? Share the web link instead. Respondents can fill in your form from any browser, with nothing to install.</p><div className="mt-8 flex flex-nowrap items-start gap-6 sm:gap-8"><div className="shrink-0"><a href={ANDROID_APP_HREF} target="_blank" rel="noreferrer" className="inline-block" aria-label="Get the Insyt Android app on Google Play"><img src="/images/google-play-badge.png" alt="Get it on Google Play" className="h-14 w-auto" /></a><p className="mt-2 text-xs text-slate">For data collectors. Free on Android.</p></div><div className="hidden items-center gap-4 lg:flex"><img src="/images/insyt-android-qr.png" alt="QR code to download the Insyt Android app" className="size-28 rounded-xl border border-[#dce5ee] bg-white p-2" /><p className="max-w-[9rem] self-center text-xs leading-5 text-slate">Scan with your phone to install.</p></div></div></motion.div><motion.div {...reveal} transition={{ ...reveal.transition, delay: .1 }} className="relative flex justify-center"><div className="app-phone-glow" aria-hidden="true" /><img src="/images/actionaid-baseline-survey-app-mockup.png" alt="The Insyt Android app capturing a baseline survey response on a phone" className="app-phone-shot relative z-10" /></motion.div></div></section>
      <section className="bg-cream py-24 lg:py-32"><Testimonials /></section>
      <section id="pricing" className="bg-white py-24 lg:py-32"><Pricing plans={pricingPlans} title="Start where you are." description="Simple, transparent plans for teams collecting field data." /></section>
      <Faq05 items={faqs} />
      <section id="resources" className="deep-section px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end"><div><p className="eyebrow text-orange">Ready when you are</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">Collecting data shouldn’t be complicated.<br />It’s very simple with Insyt.</h2></div><a href="https://sso.esoko.com/en/signup" target="_blank" rel="noreferrer" className="hero-button">Get started <ArrowRight /></a></div></section>
    </main>
    <footer className="hero-section px-5 pb-8 pt-16 text-white/60 lg:px-8"><div className="mx-auto max-w-[88rem]"><div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Brand light /><p className="mt-5 max-w-xs text-sm leading-6">A simple, fast, and flexible way to collect quality data from anywhere in the world.</p><div className="mt-6 flex items-center gap-3">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-orange hover:text-white"><svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true"><path d={social.path} /></svg></a>)}</div></div>{[...footerColumns].map(([title, ...items]) => <div key={title}><p className="text-[11px] font-bold uppercase tracking-[.16em] text-white">{title}</p><div className="mt-5 flex flex-col gap-3">{items.map(item => { const href = footerHref[item] ?? '#'; const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} key={item} className="text-sm hover:text-white">{item}</a> })}</div></div>)}</div><div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs md:flex-row"><span>© 2026 Esoko. All rights reserved.</span><span>Built for teams doing work that matters.</span></div></div></footer>
    <AnimatePresence>{chatOpen && <motion.div initial={{ opacity: 0, y: 15, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: .96 }} className="chat-panel"><div className="flex items-center justify-between border-b border-[#e7edf3] p-4"><div className="flex items-center gap-2.5"><div className="grid size-8 place-items-center rounded-full bg-blue text-white"><Sparkles /></div><div><p className="text-xs font-bold text-navy">Insyt guide</p><p className="text-[9px] text-slate">Here to help you explore</p></div></div><button onClick={() => setChatOpen(false)} aria-label="Close assistant" className="text-slate hover:text-navy"><X /></button></div><div ref={chatScrollRef} className="flex max-h-[300px] flex-col gap-3 overflow-auto p-4"><div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#f1f5f9] p-3 text-[11px] leading-5 text-navy">Hi there. What would you like to know about Insyt?</div>{chatMessages.map((message, index) => message.role === 'user' ? <div key={index} className="max-w-[90%] self-end rounded-2xl rounded-tr-sm bg-blue p-3 text-[11px] leading-5 text-white">{message.text}</div> : <div key={index} className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#f1f5f9] p-3 text-[11px] leading-5 text-navy">{message.text}</div>)}{chatTyping && <div className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm bg-[#f1f5f9] px-3 py-2"><span className="size-1.5 animate-pulse rounded-full bg-slate" /><span className="size-1.5 animate-pulse rounded-full bg-slate" /><span className="size-1.5 animate-pulse rounded-full bg-slate" /></div>}</div><div className="flex flex-wrap gap-2 px-4 pb-2">{['How does Insyt work?','How do I create a form?','Does it work offline?','Which plan is right for me?'].map(q => <button key={q} onClick={() => sendMessage(q)} className="rounded-full border border-[#dce5ee] px-3 py-2 text-[9px] font-semibold text-blue hover:border-blue">{q}</button>)}</div><form onSubmit={(e) => { e.preventDefault(); sendMessage(chatInput) }} className="flex gap-2 border-t border-[#e7edf3] p-3"><input value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Ask a question..." aria-label="Ask Insyt guide" className="min-w-0 flex-1 bg-transparent px-1 text-[11px] outline-none placeholder:text-slate" /><button type="submit" className="grid size-8 place-items-center rounded-full bg-orange text-white" aria-label="Send message"><Send /></button></form></motion.div>}</AnimatePresence><button onClick={() => setChatOpen(!chatOpen)} className="chat-launcher" aria-label={chatOpen ? 'Close assistant' : 'Open assistant'}>{chatOpen ? <X /> : <MessageCircle />}</button>
  </div>
}

function AutoStep({ onStep }: { onStep: (step: number) => void }) { useEffect(() => { const timer = window.setInterval(() => onStep((Date.now() / 1000 | 0) % 6), 3200); return () => window.clearInterval(timer) }, [onStep]); return null }

