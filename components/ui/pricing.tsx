"use client"

import NumberFlow from "@number-flow/react"
import confetti from "canvas-confetti"
import { Check, Star } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { useRef, useState } from "react"

import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export interface PricingPlan {
  name: string
  price: string
  yearlyPrice: string
  period: string
  features: string[]
  description: string
  buttonText: string
  href: string
  isPopular: boolean
}

interface PricingProps {
  plans: PricingPlan[]
  title?: string
  description?: string
}

const isNumeric = (value: string) => value.trim() !== "" && !Number.isNaN(Number(value))

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you.\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const switchRef = useRef<HTMLButtonElement>(null)

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked)
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        colors: ["#065D9B", "#E3611C", "#172B40", "#F7F5F0"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      })
    }
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.055em] text-navy sm:text-5xl">{title}</h2>
        <p className="whitespace-pre-line text-lg text-slate">{description}</p>
      </div>

      <div className="mb-10 flex items-center justify-center gap-2">
        <Label className="relative inline-flex cursor-pointer items-center">
          <Switch ref={switchRef} checked={!isMonthly} onCheckedChange={handleToggle} aria-label="Toggle annual billing" />
        </Label>
        <span className="text-sm font-semibold text-navy">
          Annual billing <span className="text-orange">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-white p-6 text-center",
              plan.isPopular ? "border-2 border-blue" : "border-[#dce5ee]",
              !plan.isPopular && "mt-5",
              index === 0 ? "z-0 origin-right" : index === 2 ? "z-0 origin-left" : "z-10",
            )}
          >
            {plan.isPopular && (
              <div className="absolute right-0 top-0 flex items-center rounded-bl-xl rounded-tr-xl bg-orange px-2 py-0.5">
                <Star className="h-4 w-4 fill-current text-white" />
                <span className="ml-1 font-semibold text-white">Popular</span>
              </div>
            )}
            <div className="flex flex-1 flex-col">
              <p className="text-base font-semibold text-slate">{plan.name}</p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                {isNumeric(plan.price) ? (
                  <span className="text-5xl font-bold tracking-tight text-navy">
                    <NumberFlow
                      value={Number(isMonthly ? plan.price : plan.yearlyPrice)}
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      className="tabular-nums"
                    />
                  </span>
                ) : (
                  <span className="text-4xl font-bold tracking-tight text-navy">{plan.price}</span>
                )}
                {plan.period !== "" && isNumeric(plan.price) && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate">/ {plan.period}</span>
                )}
              </div>

              {isNumeric(plan.price) && (
                <p className="text-xs leading-5 text-slate">{isMonthly ? "billed monthly" : "billed annually"}</p>
              )}

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-orange" />
                    <span className="text-left text-sm text-navy">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-4 w-full border-[#e7edf3]" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  plan.isPopular
                    ? "border-orange bg-orange text-white hover:bg-[#ee702d]"
                    : "border-[#dce5ee] bg-white text-navy hover:border-blue hover:bg-blue hover:text-white",
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-6 text-xs leading-5 text-slate">{plan.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
