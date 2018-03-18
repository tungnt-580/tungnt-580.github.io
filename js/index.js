(function() {
  const links = document.querySelectorAll('a[href*="#"]')
  const headerHeight = document.querySelector('header.navbar').clientHeight

  function scrollToTarget(e) {
    e.preventDefault()
    const target = this.getAttribute('href')
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    }) 
  }

  links.forEach(link => link.addEventListener('click', scrollToTarget))
})();

(function() {
  const sections = document.querySelectorAll('.sections>section:not(#introduce)')
  let lastTarget = null
  
  document.addEventListener('scroll', () => {
    if (lastTarget) {
      lastTarget.classList.remove('navbar__link--active')
    }
    lastTarget = null
    for (section of sections) {
      if (section.getBoundingClientRect().top <= 0) {
        lastTarget = document.querySelector(`a[href="#${section.getAttribute('id')}"]`)
      }
    }
    if (lastTarget) {   
      lastTarget.classList.add('navbar__link--active') 
    }
  })  
})();