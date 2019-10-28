import * as React from 'react'

const FrontMainSection = () => {

  return (
    <section className='main-container'>
      <div className='main-row'>
        <div className='summary-section to-do-summary'>
          <div className='summary-title'>To Do</div>
          <div className='summary-circle to-do-summary-circle '>
            <span className='summary-count'>3</span>
          </div>
        </div>
        <div className='summary-section doing-summary'>
          <div className='summary-title'>Doing</div>
          <div className='summary-circle doing-summary-circle '>
            <span className='summary-count'>1</span>
          </div>
        </div>
        <div className='summary-section done-summary'>
          <div className='summary-title'>Done</div>
          <div className='summary-circle done-summary-circle '>
            <span className='summary-count'>13</span>
          </div>
        </div>
        <div className='summary-section backlog-summary'>
          <div className='summary-title'>Backlog</div>
          <div className='summary-circle backlog-summary-circle '>
            <span className='summary-count'>13</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontMainSection
