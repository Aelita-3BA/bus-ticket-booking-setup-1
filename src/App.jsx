import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import HomeContainer from './pages/home_container/HomeContainer';
import About from './pages/About/About';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/' element={<About />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
