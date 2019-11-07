import * as React from 'react'
import FrontMainSection from './front-page/FrontMainSection'
import Background from './forms/Background'
import BackgroundTop from './forms/BackgroundTop'
import ListPanelFlyout from './front-page/ListPanelFlyout'

const FrontPage = () => {
  return (
    <React.Fragment>
      <Background />
      <BackgroundTop />
      <ListPanelFlyout />
      <FrontMainSection />
    </React.Fragment>
  )
}

export default FrontPage

