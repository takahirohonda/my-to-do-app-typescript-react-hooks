(function(mtdNamespace) {

  const namespaceMtd = mtdNamespace.public || (mtdNamespace.public = {});

  const updateSummarySquareHeight = namespaceMtd.updateSummarySquareHeight = () => {
    const windowHeight = window.innerHeight;
    const navHeight = document.querySelector('.header-navigation').offsetHeight;
    const summarySquare = document.querySelectorAll('.summary-section');
    for (let square of summarySquare) {
      square.style.height = (windowHeight - navHeight)/2 + 'px';
    }
  }

  const updateSummaryCountCircleSize = namespaceMtd.updateSummaryCountCircleSize = () => {
    const summarySectionElem = document.querySelector('.summary-section');
    const summarySectionHeight = summarySectionElem.offsetHeight;
    const summarySectionWidth = summarySectionElem.offsetWidth;
    if(summarySectionHeight >= summarySectionWidth) {
      addSizeToSummaryCircle((summarySectionWidth * 0.85) + 'px');
    } else {
      addSizeToSummaryCircle((summarySectionHeight * 0.85) + 'px');
    }
  }

  const addSizeToSummaryCircle = (size) => {
    const summaryCircles = document.querySelectorAll('.summary-circle');
    for (let circle of summaryCircles) {
      circle.style.height = size;
      circle.style.width = size;
    }
  }

  const addActive = namespaceMtd.addActive = (targetClassName) => {
    const targetElem = document.querySelector(targetClassName);
    if (targetElem && !targetElem.classList.contains('active')) {
      targetElem.classList.add('active')
    }
  }

  const removeActive = namespaceMtd.removeActive = (targetClassName) => {
    const targetElem = document.querySelector(targetClassName);
    if (targetElem && targetElem.classList.contains('active')) {
      targetElem.classList.remove('active')
    }
  }
})(window.mtd || (window.mtd = {}));
