import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './scss/App.scss'
import Blank from './pages/Blank'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import CustomerAdd from './components/customer-add/CustomerAdd'
import CustomerUpdate from './components/customer-update/CustomerUpdate'
import CustomerRead from './components/customer-read/CustomerRead'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="customers/read/:id" element={<CustomerRead/>}/>
          <Route path="customers/add" element={<CustomerAdd/>}/>
          <Route path="customers/update/:id" element={<CustomerUpdate/>}/>
          <Route path="products" element={<Blank/>}/>
          <Route path="stats" element={<Blank/>}/>
          <Route path="settings" element={<Blank/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
