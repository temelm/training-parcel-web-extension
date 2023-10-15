import './popup.css'
import { createCounter } from '../utils/counter'
import javascriptLogo from '../images/javascript.svg'
import parcelLogo from '../images/parcel.svg'

const button = document.createElement('button')
button.setAttribute('type', 'button')
document.body.appendChild(button)
createCounter(button)

const credits = document.createElement('p')
credits.innerHTML = `
  Made with
  <img src="${javascriptLogo}" alt="JavaScript">
  and
  <img src="${parcelLogo}" alt="Parcel">
`
document.body.appendChild(credits)