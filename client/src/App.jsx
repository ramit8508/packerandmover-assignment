import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Process from './sections/Process'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <main>
          <Hero />
          <Services />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
