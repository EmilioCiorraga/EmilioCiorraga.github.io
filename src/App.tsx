import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Technologies from './sections/Technologies'
import Contact from './sections/Contact'
import About from './sections/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main>
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <About />
      <Contact />
      </main>
      <Footer />
    </>
  )
}
