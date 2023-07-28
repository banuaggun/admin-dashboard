import React from 'react'
import './summarystats.scss'
import Stats from '../stats/Stats'

const SummaryStats = ({item}) => {
  return (
    <Stats>
      <div className="summary__stats">
      <div className="summary__stats__info">
        <div className="summary__stats__info__title">
          <div>{item.title}</div>
          <span>{item.subtitle}</span>
        </div>
        <div className="summary__stats__info__value">
          {item.value}
        </div>
        
      </div>
      <div className="summary__stats__chart">
        {item.percent}
      </div>
    </div>
    </Stats>
  )
}

export default SummaryStats