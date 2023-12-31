import React from 'react'

import data from '../../constants/data'
import ProgressBar from '../progress-bar/ProgressBar'

import './revenue-list.scss'

const RevenueList = () => {
  return (
    <ul className='revenue__list'>
      {
        data.revenueByChannel.map((item, index) => (
          <li className="revenue__list__item" key={`revenue-${index}`}>
            <div className="revenue__list__item__title">
              {item.title}
              <span className={`${item.value < 50 ? 'text__success' : 'text__danger'}`}>
                {item.value}%
              </span>
            </div>
            <div>
              <ProgressBar value={item.value}/>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default RevenueList