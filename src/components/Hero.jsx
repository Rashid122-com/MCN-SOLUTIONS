import { motion } from 'framer-motion'
import { Phone, ChevronDown } from 'lucide-react'

const HERO_IMG =
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85'

const trustItems = [
  { icon: '★★★★★', text: '5-Star Rated' },
  { icon: '🏠', text: 'Residential & Commercial' },
  { icon: '✓', text: 'Fully Insured' },
  { icon: '💬', text: 'Free Estimates' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollDown = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Freshly pressure-washed driveway with bright, clean concrete surface"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/75 to-navy-dark/85" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-dark to-transparent" />
      </div>

      {/* Gold accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-gold">★★★★★</span>
              5-Star Rated in Georgia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
          >
            Bring Back{' '}
            <span className="text-gold relative">
              The Clean.
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/50 rounded-full" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed font-medium"
          >
            Professional Pressure Washing, Window &amp; Gutter Services for Homes &amp; Businesses
            Across Georgia — Results that speak for themselves.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <button onClick={scrollToContact} className="btn-primary text-base px-8 py-4">
              Get Your Free Quote →
            </button>
            <a
              href="tel:8705043596"
              className="btn-outline text-base px-8 py-4"
            >
              <Phone size={18} />
              Call Now — 870.504.3596
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-16 left-0 right-0 z-10"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-0 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white/90 flex-1 min-w-max justify-center ${
                  i < trustItems.length - 1 ? 'border-r border-white/10' : ''
                }`}
              >
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  )
}
