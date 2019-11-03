import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom'
import SummarySection from './SummarySection'
import FrontHeader from './FrontHeader'
import {
  updateSummarySquareHeight,
  updateSummaryCountCircleSize
} from '../utils/getSummaryDivSize'

const FrontMainSection = () => {
  const frontMainEl = useRef(null)

  useEffect(() => {
    // first three lines only get called on initial update
    // probably because componentDidUpdate is not being called on this component
    // as it doesn't have states to update it.
    // Doesn't need to have windowHeihgt as internal state and pass it to the second argument as [windowHeight]
    // console.log('checking window height: ', window.innerHeight)
    updateSummarySquareHeight(frontMainEl.current)
    updateSummaryCountCircleSize(frontMainEl.current)
    window.addEventListener('resize', () => {
      updateSummarySquareHeight(frontMainEl.current)
      updateSummaryCountCircleSize(frontMainEl.current)
    })

    return () => {
      window.removeEventListener('resize', () => {
        updateSummarySquareHeight(frontMainEl.current)
        updateSummaryCountCircleSize(frontMainEl.current)
      })
    }
  })

  return (
    <React.Fragment>
      <div className='front-main' ref={frontMainEl}>
        <FrontHeader />
        <section className='main-container'>
          <div className='main-row'>
            <SummarySection />
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default FrontMainSection
