import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Building2, Check } from 'lucide-react'

const RESIDENTIAL_IMG =
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80'
const COMMERCIAL_IMG =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'

const residentialBullets = [
  'Driveways, sidewalks & patios',
  'House siding & brick',
  'Decks & fences',
  'Windows (all floors)',
  'Gutters & downspouts',
  'Exterior painting',
]

const commercialBullets = [
  'Storefronts & retail spaces',
  'Office buildings',
  'Parking lots & loading docks',
  'Restaurant & hospitality exteriors',
  'Multi-family properties',
  'Scheduled maintenance contracts',
]

function Panel({ icon: Icon, type, img, imgAlt, bullets, tag, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'residential' ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden group"
    >
      {/* Photo */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/30 to-transparent" />
        {/* Type badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-gold text-navy text-sm font-extrabold px-4 py-1.5 rounded-full">
          <Icon size={16} strokeWidth={2.5} />
          {tag}
        </div>
      </div>

      {/* Content */}
      <div className="bg-navy-light border border-white/8 border-t-0 rounded-b-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">{tag} Services</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-sm text-white/70">
              <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
              {bullet}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-block mt-6 btn-primary text-sm px-6 py-2.5"
        >
          Get a Quote
        </a>
      </div>
    </motion.div>
  )
}

export default function ResComm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="residential-commercial" className="relative py-24 lg:py-32 bg-navy-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Who We Serve</p>
          <h2 className="section-heading">
            Homes <span className="text-white/40">&</span>{' '}
            <span className="text-gold">Businesses</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Whether you're a homeowner wanting pristine curb appeal or a business that needs a
            spotless first impression — MCN Solutions delivers the same 5-star standard.
          </p>
        </motion.div>

        {/* Two panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Panel
            icon={Home}
            type="residential"
            img={RESIDENTIAL_IMG}
            imgAlt="Beautiful residential home with clean exterior siding and well-maintained landscaping"
            bullets={residentialBullets}
            tag="Residential"
            delay={0.1}
            inView={inView}
          />
          <Panel
            icon={Building2}
            type="commercial"
            img={COMMERCIAL_IMG}
            imgAlt="Modern commercial office building with clean glass facade and professional exterior"
            bullets={commercialBullets}
            tag="Commercial"
            delay={0.25}
            inView={inView}
          />
        </div>
      </div>
    </section>
  )
}
