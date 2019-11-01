import * as React from 'react'

interface IBackgroundProps {
  className: string
}

const Background = ({ className }: IBackgroundProps) => {
  return <div className={className}></div>
}

export default Background
