import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buildings from './components/Buildings'
import Inspirations from './components/Inspirations'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Header from './components/header'
function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Buildings/>
      <Features/>
      <Inspirations/>
    </>
  )
}

export default App
