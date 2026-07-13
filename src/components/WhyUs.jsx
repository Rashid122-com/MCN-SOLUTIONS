import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, ShieldCheck, BadgeDollarSign } from 'lucide-react'

const pillars = [
  {
    icon: MapPin,
    title: 'Locally Owned & Operated',
    description:
      `We're your neighbors. BK Pressure Washing is a locally-owned company that cares about the communities we serve. When you call, you're talking to the owner — not a call center.`,
    color: 'from-blue-500/20 to-blue-600/10',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: ShieldCheck,
    title: '100% Satisfaction Guaranteed',
    description:
      `We don't leave until you're completely happy with the results. Our 5-star track record isn't luck — it's our commitment to getting every job right, every time.`,
    color: 'from-gold/20 to-gold/5',
    iconBg: 'bg-gold/20',
    iconColor: 'text-gold',
  },
  {
    icon: BadgeDollarSign,
    title: 'Free, No-Obligation Estimates',
    description:
      'No pressure, no hidden fees. We assess your property, give you a clear quote, and you decide. Fully insured and transparent pricing from the first call.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-navy-dark" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Why BK Pressure Washing</p>
          <h2 className="section-heading">
            The Standard Other Companies{' '}
            <span className="text-gold">Aspire To</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            We built this company on three unbreakable promises. They're the reason our customers
            keep coming back — and why they refer their neighbors.
          </p>
        </motion.div>

        {/* 3-column cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl border border-white/8 p-8 bg-gradient-to-br ${pillar.color} backdrop-blur-sm flex flex-col gap-4`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center mb-2`}>
                  <Icon size={28} className={pillar.iconColor} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-white/65 leading-relaxed text-sm">{pillar.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '500+', label: 'Properties Cleaned' },
            { value: '5★', label: 'Average Rating' },
            { value: '100%', label: 'Satisfaction Rate' },
            { value: 'Free', label: 'Every Estimate' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl font-extrabold text-gold">{stat.value}</span>
              <span className="text-white/55 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
