import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './userinfo.scss'

const Userinfo = ({user}) => {
  return (
    <div className='user__info'>
      <div className="user__info__img">
        <img src={logo} alt="avatar"/>
      </div>
      <div className="user__info__name">
        <span>{user.name}</span>
      </div>
    </div>
  )
}

export default Userinfo