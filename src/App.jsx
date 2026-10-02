import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Header from "./components/Header.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Header />
      <main>

      </main>
      <Footer />
    </>
  )
}

export default App
