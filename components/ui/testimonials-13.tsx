import type { ComponentProps } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  designation: string
  company: string
  testimonial: string
  initials: string
  logo?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eric Ayaba",
    designation: "Head of Programmes and Influence",
    company: "WISE Project",
    testimonial:
      "Esoko successfully delivered a user-friendly and exceptional MIS for our WISE Project, significantly improving our data collection, monitoring, and reporting processes.",
    initials: "EA",
    logo: "/images/PlanInt_logo-vaF_Owwu.png",
  },
  {
    id: 2,
    name: "Ruvimbo Mushonga",
    designation: "MEAL Officer",
    company: "Bio-Innovation Zimbabwe",
    testimonial:
      "Insyt helped us take the first big step in linking small-scale producers to markets. Its simple, user-friendly database allowed farmers to capture data offline and connect directly with buyers.",
    initials: "RM",
    logo: "/images/GIZ_logo-Ds2CRv9L.png",
  },
  {
    id: 3,
    name: "Eva Traore Dahlberg",
    designation: "ProCIV Project Manager",
    company: "ProCIV",
    testimonial:
      "Esoko supported our agribusiness project with digital training, data collection, and georeferencing, enabling high-quality, timely data for effective project monitoring and follow-up.",
    initials: "ET",
    logo: "/images/BIZ_logo-CYMaWA8p.png",
  },
  {
    id: 4,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    initials: "JS",
  },
]

interface TestimonialsProps {
  eyebrow?: string
  title?: string
  description?: string
}

export function Testimonials({
  eyebrow = "What our clients say",
  title = "Built around work that matters.",
  description = "From community programs to agribusiness, teams use Insyt to make field data easier to collect, understand, and act on.",
}: TestimonialsProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow text-blue">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-navy sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate">{description}</p>
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate">Real teams. Practical outcomes. A better way to keep important work moving.</p>
      </div>

      <div className="mask-x-from-80% mt-14 border-y border-[#dce5ee] bg-cream">
        <Marquee className="py-0 [--duration:60s] [--gap:0px]" pauseOnHover>
          <TestimonialList />
        </Marquee>
      </div>
      <p className="mt-8 text-center text-xs text-slate">Customer stories shared with permission. We take data security and privacy seriously.</p>
    </div>
  )
}

const TestimonialList = ({ className, ...props }: ComponentProps<"div">) =>
  testimonials.map((testimonial) => (
    <div
      className="-mx-1 flex w-full max-w-sm flex-col odd:flex-col-reverse"
      key={testimonial.id}
      {...props}
    >
      <div className={cn("rounded-xl border border-[#dce5ee] bg-white shadow-[0_12px_35px_rgba(23,43,64,.04)]", className)}>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarFallback className="bg-blue text-base font-medium text-white">
                {testimonial.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-navy">{testimonial.name}</p>
              <p className="text-sm text-slate">{testimonial.designation}</p>
            </div>
          </div>
          <p className="mt-5 text-[17px] leading-7 text-navy">{testimonial.testimonial}</p>
        </div>
      </div>
      <div className="mask-y-from-75% mask-x-from-75% relative flex h-42 w-96 items-center justify-center p-6">
        {testimonial.logo ? (
          <img src={testimonial.logo} alt={testimonial.company} className="max-h-24 w-auto max-w-56 object-contain mix-blend-multiply" />
        ) : (
          <span className="text-2xl font-bold tracking-[-0.03em] text-slate/70">{testimonial.company}</span>
        )}
        <div
          className="absolute inset-0 isolate -z-1 opacity-15"
          style={{
            backgroundImage: `
        linear-gradient(to right, #637184 1px, transparent 1px),
        linear-gradient(to bottom, #637184 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>
    </div>
  ))

export default Testimonials
