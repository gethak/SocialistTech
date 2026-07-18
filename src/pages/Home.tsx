import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Mission from '../sections/Mission'
import Models from '../sections/Models'
import Principles from '../sections/Principles'
import Manifesto from '../sections/Manifesto'
import Join from '../sections/Join'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="grain min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Models />
        <Principles />
        <Manifesto />
        <Join />
      </main>
      <Footer />
    </div>
  )
}
