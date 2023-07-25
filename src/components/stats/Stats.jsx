import React from 'react'
import './stats.scss'

const Stats = (props) => {

  const className = {
    stats:'stats',
    blue:props.blue && 'stats-blue',
    fullHeight:props.fullHeight && 'stats-fullHeight'
  }
  return (
    <div className={Object.values(className).join(' ')}>
      {props.children}
    </div>
  )
}

export default Stats