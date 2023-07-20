import React from 'react'
import Userinfo from '../user-info/Userinfo'
import data from '../../constants/data.jsx'
import './topnav.scss'

const Topnav = () => {
  return (
    <div className='topnav'>
      <div className="sidebar__toggle">
        <i className='ph-thin ph-text-outdent'></i>
      </div>
      <div className="topnav__user">
      <Userinfo user={data.user} />
      </div>
    </div>
  )
}

export default Topnav