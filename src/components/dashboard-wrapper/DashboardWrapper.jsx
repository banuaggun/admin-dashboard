import React from 'react'
import './dashboardwrapper.scss'

const DashboardWrapper = (props) => {
  return (
    <div className='dashboard__wrapper'>
      {props.children}
    </div>
  )
}

export default DashboardWrapper

export const DashboardWrapperMain = (props) => {
  return(
    <div className='dashboard__wrapper__main'>
      {props.children}
    </div>
  )
}

export const DashboardWrapperRight = (props) => {
  return(
    <div className='dashboard__wrapper__right'>
      {props.children}
    </div>
  )
}