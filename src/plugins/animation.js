
const heroSectionAnimation = () => {
  const heroSection = document.getElementById('hero');
  const content = document.getElementById('content')

  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue)
    // Calculate a value between 1 and 0 based on scroll (fade out)
    const opacity = 1 - scrollValue / 800
    const scale = 1 - scrollValue / 2000
    const marginTop = scrollValue * 2.5 + 'px'

    heroSection.style.opacity = opacity < 0 ? 0 : opacity
    heroSection.style.transform = `scale(${scale < 0.95 ? 0.95 : scale})`
    content.style.marginTop = marginTop
  })
}

const categorySectionAnimation = ()=> {

  const categorySection = document.getElementById('category');
  // categoryContent.style.marginTop = marginTop

  window.addEventListener('scroll', ()=>{
    // const scrollValue = window.scrollY;
    // const opacity = 1
    const scale = 1
    // const marginTop = scrollValue * 2.5 + 'px'

    // categorySection.style.opacity = opacity < 0 ? 0 : opacity
    categorySection.style.transform = `scale(${scale < 0.95 ? 0.95 : scale})`
    // categoryContent.style.marginTop = marginTop
  })
}

export {heroSectionAnimation, categorySectionAnimation}
