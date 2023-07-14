import React from 'react'
import Userinfo from '../user-info/Userinfo'
import data from '../../constants/data.js'
import './topnav.scss'

const Topnav = () => {
  return (
    <div className='topnav'>
      <div className="sidebar__toggle">
        <i className='ph-thin ph-text-outdent'></i>
      </div>
      <Userinfo user={data.user} />
    </div>
  )
}

export default Topnav