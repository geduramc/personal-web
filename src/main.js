import './assets/style.css'
import * as config from '../public/config.json'

config.links.forEach(item => {
  const div = document.createElement('div')
  div.classList.add('col-md-12')

  const link = document.createElement('a')
  link.classList.add('link-button')
  link.target = "_blank"
  link.setAttribute('rel', 'noopener noreferrer')

  if (!item.enabled) {
    link.href = '#none'
    if (!item.enabled) link.classList.add('disable')
  }
  else link.href = item.url

  const img = document.createElement('img')
  img.classList.add('linkedin-icon')
  img.src = item.icon

  const span = document.createElement('span')
  span.innerText = item.text

  link.appendChild(img)
  link.appendChild(span)
  div.appendChild(link)

  document.querySelector('.row').appendChild(div)
})
