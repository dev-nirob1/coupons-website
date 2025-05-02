const heroSectionAnimation = () => {
  const heroSection = document.getElementById('hero')
  const content = document.getElementById('content')

  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY
    // console.log(scrollValue)
    // Calculate a value between 1 and 0 based on scroll (fade out)
    const opacity = 1 - scrollValue / 800
    const scale = 1 - scrollValue / 2000
    const marginTop = scrollValue * 2.5 + 'px'

    heroSection.style.opacity = opacity < 0 ? 0 : opacity
    heroSection.style.transform = `scale(${scale < 0.95 ? 0.95 : scale})`
    content.style.marginTop = marginTop
  })
}

const navbarAnimation = () => {
  const body = document.body
  // console.log(body);
  let lastScroll = 0

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    if(currentScroll ===0 ){
      body.classList.remove('scroll-down', 'scroll-up')
      return;
    }
    if (currentScroll > lastScroll) {
      body.classList.add('scroll-down')
      body.classList.remove('scroll-up')
    } else {
      body.classList.add('scroll-up')
      body.classList.remove('scroll-down')
    }
    lastScroll = currentScroll
  })
}

export { heroSectionAnimation, navbarAnimation }
