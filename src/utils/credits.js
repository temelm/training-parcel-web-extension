import javascriptLogo from '../images/javascript.svg'
import parcelLogo from '../images/parcel.svg'

export function createCredits () {
  const credits = document.createElement('p')
  credits.innerHTML = `
    Made with
    <img src="${javascriptLogo}" alt="JavaScript">
    and
    <img src="${parcelLogo}" alt="Parcel">
  `
  document.body.appendChild(credits)
}