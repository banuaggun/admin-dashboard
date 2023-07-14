import { useState, useEffect } from 'react'
import './sidebar.scss'
//import {images} from '../../constants/images.js'
import logo from '../../assets/images/logo.jpg'
import sidebarNav from '../../configs/sidebarNav'
import { Link, useLocation } from 'react-router-dom'




const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1]
    const activeItem = sidebarNav.findIndex(item => item.section === curPath)
    setActiveIndex(curPath.length === 0 ? 0 : activeIndex)
  }, [location])
  
  return (
    <div className="sidebar">
      <div className='sidebar__logo'>
        <img src={logo} alt="logo" />
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