import React from 'react'
import data from '../../constants/data'

import './overall-list.scss'

const icons = [
  <i className='ph-thin ph-receipt'></i>,
  <i className='ph-thin ph-user'></i>,
  <i className='ph-thin ph-cube'></i>,
  <i className='ph-thin ph-currency-dollar'></i>
]

const OverallList = () => {
  return (
    <ul className="overall__list">
      {data.overall.map((item, index) => (
        <li className="overall__list__item" key={`overall - ${index}`}>
          <div className="overall__list__item__icon">
            {icons[index]}
          </div>
          <div className="overall__list__item__info">
            <div className="title">
              {item.value}
            </div>
            <span>
              {item.title}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default OverallList