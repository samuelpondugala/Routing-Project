import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route,Routes, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import { ArrowLeft,ArrowRight } from 'lucide-react';
import CourseDetails from './pages/CourseDetails';
import Courses from './pages/Courses';
import Kids from './pages/Kids';

const App = () => {
  const navigate = useNavigate()
  
  const handleGoBack = ()=>{
    navigate(-1); //Navigate back one step in the history stack
  }
  const handleGoFroward = ()=>{
    navigate(1)
  }
  return (
    <div className='h-screen bg-black text-white '>
      <div className="btn flex gap-2 absolute top-25 left-2">
        <button className='bg-white hover:bg-gray-300 rounded text-black cursor-pointer active:scale-95'
        onClick={handleGoBack}> <ArrowLeft/> </button>
        <button className='bg-white hover:bg-gray-300 rounded text-black cursor-pointer active:scale-95' 
        onClick={handleGoFroward}><ArrowRight/></button>
      </div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='/courses/:courseid' element={<CourseDetails/>} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/product' element={<Product/>} >
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
