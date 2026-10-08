import './App.css'
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Header from "./components/Header.jsx";
import Teams from './teams/page.jsx';
import Pokemon from './pokemon/page.jsx';
import Detail from './detail/page.jsx';


function App() {

  return (
    <>
      <Hero />
      <Header />
      <Routes>
        <Route path={"/teams"} element={<Teams />} />
        <Route path={"/pokemon"} element={<Pokemon />} />
        <Route path={"/detail"} element={<Detail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
