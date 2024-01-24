import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Price from './Price/Price'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-7xl text-center text-purple-700'>Hello React Vite Tailwind css</h1>
      <Price></Price>
    </>
  )
}

export default App
