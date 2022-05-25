import React from 'react'
import './styles.scss'

function HorizontalTimelineItem({icon}) {
  return (
    <article className='horizontal-timeline-item'>
        <img src={icon} alt='some' />
        <p>Something</p>
    </article>
  )
}

export default HorizontalTimelineItem