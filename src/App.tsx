import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ProblemSolution from './components/ProblemSolution'
import WhyPagiOx from './components/WhyPagiOx'
import Process from './components/Process'
import BusinessSupport from './components/BusinessSupport'
import WebsiteDevelopment from './components/WebsiteDevelopment'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-ac focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <ProblemSolution />
        <WhyPagiOx />
        <Process />
        <BusinessSupport />
        <WebsiteDevelopment />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
