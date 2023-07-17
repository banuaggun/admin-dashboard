import React from 'react'
import './layout.scss'
import {Outlet} from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Topnav from '../components/topnav/Topnav'

const Layout = () => {
  return (
    <>
      <Sidebar/>
      <Topnav/>
      <div className='main'>
        <div className="main__content">
      
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Layout