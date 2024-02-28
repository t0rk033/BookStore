import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Romance from './pages/romance/Romance'

function RoutesApp() {
  return (
  <HashRouter>
    <Navbar />
    <Routes>
        <Route path='/' Component={Home} />
        <Route path='/romance' Component={Romance}/>
    </Routes>
  </HashRouter>
  )
}

export default RoutesApp
