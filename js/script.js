const svgContainer_1 = document.querySelector('.svg-container_1')
const svgContainer_2 = document.querySelector('.svg-container_2')
const svgContainer_3 = document.querySelector('.svg-container_3')
const svgContainer_4 = document.querySelector('.svg-container_4')

document.addEventListener('mousemove', e => {
  const mouseX = e.pageX / window.innerWidth - 0.2
  const mouseY = e.pageY / window.innerHeight - 0.2

  // Adjust the movement range and direction as needed
  const translateX = mouseX * 10
  const translateY = mouseY * 10

  svgContainer_1.style.transform = `translate(${translateX}px, ${translateY}px)`
  svgContainer_2.style.transform = `translate(${translateX}px, ${translateY}px) `
  svgContainer_3.style.transform = `translate(${translateX}px, ${translateY}px)`
  svgContainer_4.style.transform = `translate(${translateX}px, ${translateY}px)`
})

const clicked_1 = document.querySelector('.svg-container_1')
const clicked_2 = document.querySelector('.svg-container_2')
const clicked_3 = document.querySelector('.svg-container_3')
const clicked_4 = document.querySelector('.svg-container_4')

document.addEventListener('click', () => {
  clicked_1.window.location.href = URL('./html/løvskov.html')
  clicked_2.window.location.href = './html/løvskov.html'
  clicked_3.window.location.href = './html/løvskov.html'
  clicked_4.window.location.href = './html/løvskov.html'
})
