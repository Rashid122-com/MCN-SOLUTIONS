import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Droplets, Eye, Wind, Paintbrush } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description:
      'Blast away years of grime, mold, and stains from driveways, sidewalks, decks, and house exteriors. We restore your surfaces to their original brilliance.',
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    alt: 'Technician pressure washing a concrete driveway, removing dirt and stains',
    tag: 'Most Popular',
  },
  {
    icon: Eye,
    title: 'Window Cleaning',
    description:
      `Crystal-clear results inside and out. Our professional window cleaning leaves streak-free glass that enhances your home's curb appeal and natural light.`,
    img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
    alt: 'Professional window cleaner using a squeegee on exterior glass of a modern building',
    tag: null,
  },
  {
    icon: Wind,
    title: 'Gutter Services',
    description:
      'Clogged gutters damage foundations and roofs. We clear debris, flush downspouts, and inspect for damage — protecting your biggest investment.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    alt: 'Technician on a ladder cleaning and clearing debris from residential gutters',
    tag: null,
  },
  {
    icon: Paintbrush,
    title: 'Exterior Painting',
    description:
      'A fresh coat transforms everything. Premium exterior paints, meticulous prep work, and flawless finish — residential and commercial properties.',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    alt: 'Painter applying exterior paint to a house wall with a roller brush',
    tag: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* Photo */}
      <div className="relative h-52 sm:h-56 overflow-hidden flex-shrink-0">
        {service.tag && (
          <div className="absolute top-3 left-3 z-10 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
            {service.tag}
          </div>
        )}
        <img
          src={service.img}
          alt={service.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
        {/* Icon badge */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gold flex items-center justify-center shadow-lg">
          <Icon size={20} className="text-navy" strokeWidth={2.5} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6 flex-grow">
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-white/65 text-sm leading-relaxed flex-grow">{service.description}</p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-3 transition-all duration-200 mt-auto"
        >
          Get a Quote <span aria-hidden>→</span>
        </a>
      </div>
    </motion.article>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-navy-dark" ref={ref}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-navy-dark/0 to-navy-dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-heading">
            Services Built for{' '}
            <span className="text-gold">Georgia's Toughest</span> Grime
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            From driveways to rooftops, we bring professional-grade results to every project —
            residential and commercial.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
