import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  designation: string
  company: string
  testimonial: string
  initials: string
  logo?: string
  context?: string
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
    context: "Esoko project work",
  },
  {
    id: 2,
    name: "Ruvimbo Mushonga",
    designation: "MEAL Officer",
    company: "Bio-Innovation Zimbabwe",
    testimonial:
      "Insyt helped us take the first big step in linking small-scale producers to markets. Its simple, user-friendly database allowed farmers to capture data offline and connect directly with buyers.",
    initials: "RM",
    logo: "/images/BIZ_logo-CYMaWA8p.png",
  },
  {
    id: 3,
    name: "Eva Traore Dahlberg",
    designation: "ProCIV Project Manager",
    company: "ProCIV",
    testimonial:
      "Esoko supported our agribusiness project with digital training, data collection, and georeferencing, enabling high-quality, timely data for effective project monitoring and follow-up.",
    initials: "ET",
    logo: "/images/GIZ_logo-Ds2CRv9L.png",
    context: "Esoko project work",
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

      <div className="mt-14 grid gap-8 border-t border-[#dce5ee] pt-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.id} className="flex flex-col">
            <div className="flex-1 rounded-xl border border-[#dce5ee] bg-white p-6 shadow-[0_12px_35px_rgba(23,43,64,.04)]">
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
              {testimonial.context && (
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[.14em] text-orange">{testimonial.context}</p>
              )}
              <blockquote className="mt-3 text-[17px] leading-7 text-navy">{testimonial.testimonial}</blockquote>
            </div>
            <div className="mt-5 flex h-20 items-center">
              {testimonial.logo ? (
                <img src={testimonial.logo} alt={testimonial.company} className="max-h-16 w-auto max-w-[190px] object-contain" />
              ) : (
                <span className="text-xl font-bold tracking-[-0.03em] text-slate/70">{testimonial.company}</span>
              )}
            </div>
          </figure>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-slate">Customer stories shared with permission. We take data security and privacy seriously.</p>
    </div>
  )
}

export default Testimonials
