import React from 'react';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Projects } from './components/Projects';
function App() {
  if(window.location.pathname==='/'){
    return(
      <>
    <main style={{background: 'linear-gradient(to right,#84ffc9,#aab2ff,#eca0ff)'}} className='w-screen min-h-screen text-[#002855]'>
       <Navbar/>
       <Home/>
    </main>
    </>
    )
  }
  else if(window.location.pathname==='/contact'){
    return(
      <>
    <main style={{background: 'linear-gradient(to right, #84ffc9, #aab2ff ,#eca0ff)'}} className='w-screen min-h-screen text-[#002855]'>
       <Navbar/>
    <Contact/>
    </main>
    </>
    )
  }
  else if(window.location.pathname==='/portfolio'){
    return(
      <>
    <div style={{background: 'linear-gradient(to right, #84ffc9, #aab2ff ,#eca0ff)'}} className='w-screen min-h-screen text-[#002855]'>
       <Navbar/>
    <Portfolio/>
    </div>
    </>
    )
  }
  else if(window.location.pathname==='/projects'){
    return(
      <>
    <div style={{background: 'linear-gradient(to right, #84ffc9, #aab2ff ,#eca0ff)'}} className='w-screen min-h-screen text-[#002855]'>
       <Navbar/>
       <Projects/>
       <Footer/>
    </div>
    </>
    )
  }
}

export default App;
