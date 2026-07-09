import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeftRight } from 'lucide-react'

const pairs = [
  {
    id: 'driveway',
    label: 'Driveway Cleaning',
    beforeImg: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=900&q=80',
    afterImg:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    beforeAlt: 'Dirty concrete driveway covered in dark stains, mold, and accumulated grime before pressure washing',
    afterAlt:  'Same driveway after professional pressure washing — bright white clean concrete surface',
  },
  {
    id: 'siding',
    label: 'House Siding Wash',
    beforeImg: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    afterImg:  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80',
    beforeAlt: 'House siding with heavy algae, mildew, and weathering stains before cleaning',
    afterAlt:  'Clean, freshly washed house siding with restored color and curb appeal after treatment',
  },
  {
    id: 'deck',
    label: 'Deck Restoration',
    beforeImg: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80',
    afterImg:  'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=900&q=80',
    beforeAlt: 'Weathered wooden deck with grey discoloration and dirt buildup before pressure washing',
    afterAlt:  'Restored clean deck with wood grain visible and fresh appearance after professional pressure washing',
  },
]

function BeforeAfterSlider({ pair }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = (e) => {
    isDragging.current = true
    updatePosition(e.clientX)
    const onMove = (ev) => isDragging.current && updatePosition(ev.clientX)
    const onUp = () => { isDragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchMove = (e) => {
    e.preventDefault()
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="ba-container select-none"
      style={{ aspectRatio: '16/9' }}
      onMouseDown={onMouseDown}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={onTouchMove}
    >
      {/* Before image (full width, behind) */}
      <img
        src={pair.beforeImg}
        alt={pair.beforeAlt}
        draggable={false}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Before label */}
      <div className="absolute top-3 left-3 z-20 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
        BEFORE
      </div>

      {/* After image (clipped) */}
      <div
        className="ba-after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={pair.afterImg}
          alt={pair.afterAlt}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* After label */}
        <div className="absolute top-3 right-3 z-20 bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded-full">
          AFTER
        </div>
      </div>

      {/* Divider handle */}
      <div className="ba-handle" style={{ left: `${position}%` }}>
        <div className="ba-handle-circle">
          <ArrowLeftRight size={16} className="text-navy" strokeWidth={3} />
        </div>
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function BeforeAfter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="showcase" className="relative py-24 lg:py-32 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">The Results Speak</p>
          <h2 className="section-heading">
            Before &amp; After{' '}
            <span className="text-gold">Transformations</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Drag the slider to see the dramatic difference our work makes. Real results, real properties.
          </p>
        </motion.div>

        {/* Sliders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {pairs.map((pair) => (
            <motion.div key={pair.id} variants={itemVariants} className="flex flex-col gap-3">
              <BeforeAfterSlider pair={pair} />
              <p className="text-center text-white/70 text-sm font-semibold tracking-wide">
                {pair.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-white/60 mb-5 text-base">
            Ready to see results like these on your property?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-base px-8 py-4"
          >
            Schedule My Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
