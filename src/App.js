import React from 'react';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Projects } from './components/Projects';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
function App() {
    return(
      <>
    <div style={{background: 'linear-gradient(to right,#84ffc9,#aab2ff,#eca0ff)'}} className='w-screen min-h-[100svh] text-[#002855]'>
       <BrowserRouter basename='/MyPortfolio'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/projects' element={<Projects/>} ></Route>
       </Routes>
       </BrowserRouter>
    </div>
    </>
    )
  }
export default App;
