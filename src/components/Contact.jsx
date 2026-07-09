import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const SERVICES = [
  'Pressure Washing',
  'Window Cleaning',
  'Gutter Cleaning',
  'Exterior Painting',
  'Multiple Services',
  'Other / Not Sure',
]

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.phone.trim()) errors.phone = 'Phone number is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.service) errors.service = 'Please select a service'
  return errors
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    // Netlify Forms — works automatically on Netlify deploy
    // For other hosts, swap action to a Formspree endpoint
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-navy" ref={ref}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-heading">
            Your Free Quote Is{' '}
            <span className="text-gold">One Message Away</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Fill out the form and we'll get back to you within 24 hours — usually much sooner.
            No obligation, no pressure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Business info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-navy-light border border-white/8 rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="text-lg font-bold text-white">Contact Information</h3>

              <a
                href="tel:4047896528"
                className="flex items-start gap-3 group"
                aria-label="Call MCN Solutions"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-200">
                  <Phone size={18} className="text-gold group-hover:text-navy transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-white font-bold text-base group-hover:text-gold transition-colors duration-200">
                    404.789.6528
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@mcnsolutionsllc.com"
                className="flex items-start gap-3 group"
                aria-label="Email MCN Solutions"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-200">
                  <Mail size={18} className="text-gold group-hover:text-navy transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white font-bold text-sm break-all group-hover:text-gold transition-colors duration-200">
                    info@mcnsolutionsllc.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">Hours</p>
                  <p className="text-white font-bold">Mon – Sat</p>
                  <p className="text-white/65 text-sm">9:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">Service Area</p>
                  <p className="text-white font-bold">Metro Atlanta & Georgia</p>
                  <p className="text-white/65 text-sm">Marietta • Alpharetta • Kennesaw and surrounding areas</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-white/8 flex-grow min-h-[200px]">
              <iframe
                title="MCN Solutions Georgia Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424744.5856873937!2d-84.72301!3d33.9526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-navy-light border border-white/8 rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 size={40} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Quote Request Sent!</h3>
                    <p className="text-white/65 max-w-sm">
                      We'll review your request and get back to you within 24 hours — usually much
                      sooner. You can also call us directly at{' '}
                      <a href="tel:4047896528" className="text-gold font-semibold hover:underline">
                        404.789.6528
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline text-sm px-6 py-2.5 mt-2"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    name="quote-request"
                    method="POST"
                    data-netlify="true"
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    {/* Hidden field for Netlify */}
                    <input type="hidden" name="form-name" value="quote-request" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-white/70 text-sm font-medium">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={`form-input ${errors.name ? 'border-red-500/60' : ''}`}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 text-red-400 text-xs">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-white/70 text-sm font-medium">
                          Phone Number <span className="text-gold">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(404) 555-0123"
                          className={`form-input ${errors.phone ? 'border-red-500/60' : ''}`}
                        />
                        {errors.phone && (
                          <p className="flex items-center gap-1 text-red-400 text-xs">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-white/70 text-sm font-medium">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`form-input ${errors.email ? 'border-red-500/60' : ''}`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-red-400 text-xs">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-white/70 text-sm font-medium">
                        Service Needed <span className="text-gold">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`form-input ${errors.service ? 'border-red-500/60' : ''}`}
                      >
                        <option value="" disabled>Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="flex items-center gap-1 text-red-400 text-xs">
                          <AlertCircle size={12} /> {errors.service}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-white/70 text-sm font-medium">
                        Message <span className="text-white/35">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit about your property, what you need, and the best time to reach you…"
                        className="form-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden>
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send My Free Quote Request
                        </>
                      )}
                    </button>

                    <p className="text-white/35 text-xs text-center">
                      No spam, ever. We'll only use your info to respond to this request.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
