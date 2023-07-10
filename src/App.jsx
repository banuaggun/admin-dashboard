import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './scss/App.scss'
import Blank from './pages/Blank'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="customers" element={<Blank/>}/>
          <Route path="products" element={<Blank/>}/>
          <Route path="stats" element={<Blank/>}/>
          <Route oath="settings" element={<Blank/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
