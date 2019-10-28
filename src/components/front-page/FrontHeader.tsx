import * as React from 'react'
import CategorySelect from './CategorySelect'

const FrontHeader = () => {
  return (
    <nav className='header-navigation'>
    <div className='header-left'>
      {/* <!-- Toggle Icon --> */}
      <div className='nav-burger-container'>
        <span className='nav-burger-icon'></span>
        <span className='nav-burger-icon'></span>
        <span className='nav-burger-icon'></span>
      </div>
      {/* <!-- Category selector --> */}
      <CategorySelect />
    </div>
    <div className='header-right'>
      <span className='nav-dot'>&#8942;</span>
    </div>
  </nav>
  )
}

export default FrontHeader
