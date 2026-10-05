import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Header from "./components/Header.jsx";
import Teams from './teams/page.jsx';
import Pokemon from './pokemon/page.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Header />
      <Routes>
        <Route path={"/teams"} element={<Teams />} />
        <Route path={"/pokemon"} element={<Pokemon />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
