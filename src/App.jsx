import './App.css'
import { Routes, Route } from "react-router-dom";
import Hero from './components/layout/Hero.jsx'
import Footer from './components/layout/Footer.jsx'
import Header from "./components/layout/Header.jsx";
import Teams from './pages/teams/TeamsPage.jsx';
import Pokemon from './pages/pokemon/PokemonPage.jsx';
import Home from './pages/home/HomePage.jsx';
import Detail from './pages/detail/DetailPage.jsx';


function App() {

  return (
    <>
      <Hero />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/teams"} element={<Teams />} />
        <Route path={"/pokemon"} element={<Pokemon />} />
        <Route path={"/detail"} element={<Detail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App