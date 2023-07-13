import { useState } from 'react'
import './sidebar.scss'
//import {images} from '../../constants/images.js'
import logo from '../../assets/images/logo.jpg'
import sidebarNav from '../../configs/sidebarNav'
import { Link } from 'react-router-dom'




const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="sidebar">
      <div className='sidebar__logo'>
        <img src={logo} alt="logo" style={{width:'40px', height:'40px'}}/>
        <div className='sidebar__close'>
          <i className='ph ph-x-circle'></i>
        </div>
      </div>
      <div className="sidebar__menu">
        {
          sidebarNav.map((nav, index) => (
            <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
              <div className='sidebar__menu__item__icon'>
                {nav.icon}
              </div>
              <div className="sidebar__menu__item__text">
                {nav.text}
              </div>
            </Link>
          ))
        }
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className='ph-thin ph-sign-out'></i>
          </div>
          <div className="sidebar__menu__item__text">
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar