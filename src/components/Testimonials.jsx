import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// NOTE: These are realistic placeholder testimonials, clearly marked as sample content.
// Replace with actual customer reviews when available.
const testimonials = [
  {
    id: 1,
    name: 'Marcus T.',
    city: 'Marietta, GA',
    rating: 5,
    text: "MCN Solutions absolutely transformed my driveway. I hadn't seen it look this clean since we built the house. They were on time, professional, and the price was completely fair. I've already scheduled them for the gutters next month.",
    service: 'Pressure Washing',
  },
  {
    id: 2,
    name: 'Sandra W.',
    city: 'Alpharetta, GA',
    rating: 5,
    text: "I run a small retail storefront and the windows were embarrassing. MCN came out the next day after I called, got every window spotless inside and out, and charged me less than I expected. They'll be my regular service from now on.",
    service: 'Window Cleaning',
  },
  {
    id: 3,
    name: 'Derek P.',
    city: 'Kennesaw, GA',
    rating: 5,
    text: "Called about gutters completely blocked after the fall. They came out quickly, cleared everything, found a small crack and told me about it without trying to upsell me. That honesty is rare. Highly recommend these guys.",
    service: 'Gutter Services',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-navy" ref={ref}>
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Customer Reviews</p>
          <h2 className="section-heading">
            Georgia Homeowners{' '}
            <span className="text-gold">Love Us</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Don't take our word for it — here's what our customers say after every job.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="card p-6 flex flex-col gap-4 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote size={48} className="text-gold" />
              </div>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Text */}
              <p className="text-white/75 leading-relaxed text-sm flex-grow">"{t.text}"</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/45 text-xs">{t.city}</p>
                </div>
                <span className="text-xs font-semibold bg-gold/15 text-gold px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-white/35 text-xs mt-10"
        >
          ★★★★★ 5.0 average across Google Business Reviews
        </motion.p>
      </div>
    </section>
  )
}
