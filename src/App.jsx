import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import ResComm from './components/ResComm'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-dark text-white font-sans">
      {/* Sticky navigation header */}
      <Header />

      <main>
        {/* 1. Hero — full-bleed photo, headline, trust bar */}
        <Hero />

        {/* 2. Services — 4-card grid */}
        <Services />

        {/* 3. Before & After — interactive drag sliders */}
        <BeforeAfter />

        {/* 4. Why Choose Us — 3-pillar trust section */}
        <WhyUs />

        {/* 5. Testimonials — 5-star review cards */}
        <Testimonials />

        {/* 6. Residential & Commercial — dual panel split */}
        <ResComm />

        {/* 7. Contact / Quote Form */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
