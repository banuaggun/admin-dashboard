import React, {useRef, useEffect} from 'react'

import './progress-bar.scss'

const ProgressBar = ({value}) => {

  const barInnerRef = useRef()

  useEffect(() => {
    barInnerRef.current.style.width = `${value}%`
  }, [])
  return (
    <div className="progress__bar">
      <div className="progress__bar__inner" ref={barInnerRef}>

      </div>
    </div>
  )
}

export default ProgressBar