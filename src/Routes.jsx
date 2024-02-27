import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'

function RoutesApp() {
  return (
  <HashRouter>
    <Navbar />
    <Routes>
        <Route path='/' Component={Home} />
    </Routes>
  </HashRouter>
  )
}

export default RoutesApp
