import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#showcase' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-2 group"
              aria-label="MCN Solutions LLC Home"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold text-navy font-extrabold text-lg leading-none select-none group-hover:scale-110 transition-transform duration-200">
                M
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-lg tracking-tight leading-tight">
                  MCN <span className="text-gold">Solutions</span>
                </span>
                <span className="text-white/50 text-[10px] font-medium tracking-widest uppercase">
                  LLC
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="px-4 py-2 text-white/80 hover:text-white font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:4047896528"
                className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors duration-200 text-sm font-medium"
              >
                <Phone size={15} className="text-gold" />
                404.789.6528
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Get Free Quote
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:4047896528"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-navy transition-all duration-200"
                aria-label="Call MCN Solutions"
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-navy-dark/98 backdrop-blur-md border-t border-white/10"
            >
              <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="px-4 py-3 text-white/80 hover:text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="btn-primary justify-center mt-3 text-sm"
                >
                  Get Your Free Quote
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
