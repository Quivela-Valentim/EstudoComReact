/*import logo from './logo.svg';
import './App.css';*/
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contactos from './pages/Contactos';
import Empresa from './pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
/*
import { useState } from "react"
import SeuNome from './components/SeuNome';
import Cumprimentos from './components/Cumprimentos';*/

function App() {
  const name = "António"
/*
  const name = "António"
  const [nome, setNome]= useState()
  const meusItens=["Django", "React", "Bootstrap", "Node.js"]
*/
  return (

    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element ={<Home/>}></Route>
      <Route path='/contactos' element={ <Contactos/>}></Route>
      <Route path='/empresa' element= { <Empresa/>}></Route>
    </Routes>
     <Footer/>
    </Router>

    
      /*
      <SeuNome setNome={setNome}/>
      <Cumprimentos nome={nome}/>*/
  
  )
}

export default App;
