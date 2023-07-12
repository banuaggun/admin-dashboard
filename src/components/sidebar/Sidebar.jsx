import { useState } from 'react'
import './sidebar.scss'
//import {images} from '../../constants/images.js'
import logo from '../../assets/images/logo.jpg'
import sidebarNav from '../../configs/sidebarNav'
import { Heart, Cube, Circle } from 'phosphor-react'




const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="sidebar">
      <div className='sidebar__logo'>
        <img src={logo} alt="logo" style={{width:'120px', height:'120px'}}/>
        <br/><br/><br/>
        <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
      <Circle color="gray" weight="thin" size={28}/>
      <i className="ph-thin ph-airplane"></i>
        <div className='sidebar__close'>
          <i className='ph ph-x-circle'></i>
          sidebar
        </div>
      </div>
    </div>
  )
}

export default Sidebar