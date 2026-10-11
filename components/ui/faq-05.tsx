'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Faq05 = ({ items }: { items: readonly { question: string; answer: string }[] }) => {
  return (
    <section id="faq" className="bg-cream px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 border-y border-[#dce5ee] md:grid-cols-2 md:border-x">
        <div className="flex flex-col gap-4 border-b border-[#dce5ee] px-6 pt-12 pb-6 md:border-b-0 md:border-e md:px-10 md:py-16">
          <p className="eyebrow text-blue">Frequently asked</p>
          <h2 className="text-4xl font-semibold tracking-[-0.055em] text-navy sm:text-5xl">Questions before you start.</h2>
          <p className="max-w-sm text-sm leading-7 text-slate">The things people ask most often. Still stuck? Reach out and we&apos;ll walk you through it.</p>
        </div>

        <div className="flex flex-col justify-center px-6 py-4 md:px-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index + 1}`} className="border-[#dce5ee]">
                <AccordionTrigger className="text-lg font-semibold text-navy hover:text-blue hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="max-w-2xl text-base leading-7 text-slate">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq05
