export const updateSummarySquareHeight = (domNode: HTMLElement): void => {
  const windowHeight = window.innerHeight
  const navHeight = (domNode.querySelector('.header-navigation') as HTMLElement).offsetHeight
  const summarySquare: NodeListOf<HTMLElement> = domNode.querySelectorAll('.summary-section')
  for (const square of summarySquare) {
    square.style.height = (windowHeight - navHeight) / 2 + 'px'
  }
}

export const updateSummaryCountCircleSize = (domNode: HTMLElement) => {
  const summarySectionElem = domNode.querySelector('.summary-section') as HTMLElement
  const summarySectionHeight = summarySectionElem.offsetHeight
  const summarySectionWidth = summarySectionElem.offsetWidth
  if (summarySectionHeight >= summarySectionWidth) {
    addSizeToSummaryCircle(domNode, (summarySectionWidth * 0.85) + 'px')
  } else {
    addSizeToSummaryCircle(domNode, (summarySectionHeight * 0.85) + 'px')
  }
}

const addSizeToSummaryCircle = (domNode: HTMLElement, size: string) => {
  const summaryCircles: NodeListOf<HTMLElement> = domNode.querySelectorAll('.summary-circle')
  for (const circle of summaryCircles) {
    circle.style.height = size
    circle.style.width = size
  }
}
