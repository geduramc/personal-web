import './assets/style.css'
import * as config from '../public/config.json'

const configProfile = () => {
  const div = document.createElement('div')
  div.classList.add('col-md-12')
  div.classList.add('profile-content')
  div.classList.add('text-center')

  const img = document.createElement('img')
  img.classList.add('profile')
  img.alt = 'profile-image'
  img.src = config.profile.photo

  const h1 = document.createElement('h1')
  h1.innerText = config.profile.title

  const h2 = document.createElement('h2')
  h2.innerText = config.profile.subtitle

  div.appendChild(img)
  div.appendChild(h1)
  div.appendChild(h2)
  
  document.querySelector('.row-profile').appendChild(div)
}

const configLinks = () => {
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
}

if(!config.general['template-annotation']) document.querySelector('.template-annotation').remove()
document.title = config.general['tab-title']
configProfile()
configLinks()