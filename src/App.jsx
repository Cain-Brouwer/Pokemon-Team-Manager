import './App.css'
import {Routes, Route} from "react-router-dom";
import Hero from './components/layout/Hero.jsx'
import Footer from './components/layout/Footer.jsx'
import Header from "./components/layout/Header.jsx";
import Teams from './pages/TeamsPage.jsx';
import Pokemon from './pages/Pokemon.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';


function App() {

    return (
        <div className="flex min-h-screen flex-col">
            <Hero/>
            <Header/>
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"/teams"} element={<Teams/>}/>
                    <Route path={"/pokemon"} element={<Pokemon/>}/>
                    <Route path="/detail/:name" element={<Detail/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App