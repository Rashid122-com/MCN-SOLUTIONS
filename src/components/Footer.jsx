import { Phone, Mail, Clock, Droplets, Eye, Wind, Paintbrush } from 'lucide-react'
import bkLogo from '../assets/bk-logo.png'

// Social icon SVGs (not available in this lucide-react version)
function InstagramIcon({ size = 18, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 18, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}


const services = [
  { icon: Droplets, label: 'Pressure Washing' },
  { icon: Eye, label: 'Window Cleaning' },
  { icon: Wind, label: 'Gutter Services' },
  { icon: Paintbrush, label: 'Exterior Painting' },
]

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy-dark border-t border-white/8">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="flex items-center gap-2"
              aria-label="BK Pressure Washing"
            >
              <img
                src={bkLogo}
                alt="BK Pressure Washing Logo"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional pressure washing for homes &amp; businesses. Quality results, every time.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MCN Solutions on Instagram"
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white/60 hover:bg-gold hover:text-navy transition-all duration-200 hover:scale-110"
              >
              <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MCN Solutions on Facebook"
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white/60 hover:bg-gold hover:text-navy transition-all duration-200 hover:scale-110"
              >
              <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="flex items-center gap-2 text-white/55 hover:text-gold text-sm transition-colors duration-200"
                  >
                    <Icon size={14} className="text-gold/70" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home', id: '#home' },
                { label: 'Our Work', id: '#showcase' },
                { label: 'Why Us', id: '#why-us' },
                { label: 'Get a Quote', id: '#contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={id}
                    onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                    className="text-white/55 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:8705043596"
                  className="flex items-center gap-2 text-white/55 hover:text-gold text-sm transition-colors duration-200"
                >
                  <Phone size={14} className="text-gold/70" />
                  870.504.3596
                </a>
              </li>
              <li>
                <a
                  href="mailto:ckite2008@gmail.com"
                  className="flex items-center gap-2 text-white/55 hover:text-gold text-sm transition-colors duration-200 break-all"
                >
                  <Mail size={14} className="text-gold/70 flex-shrink-0" />
                  ckite2008@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/55 text-sm">
                <Clock size={14} className="text-gold/70 flex-shrink-0 mt-0.5" />
                <span>Mon–Sat, 9:00AM–5:00PM</span>
              </li>
            </ul>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="btn-primary text-sm px-5 py-2.5 mt-2 self-start"
            >
              Free Quote →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <p>© {new Date().getFullYear()} BK Pressure Washing. All rights reserved.</p>
          <p>Professional Pressure Washing Services</p>
        </div>
      </div>
    </footer>
  )
}
