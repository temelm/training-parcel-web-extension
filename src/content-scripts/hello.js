const paragraphId = 'hello-from-training-parcel-web-extension'

if (!document.querySelector(`#${paragraphId}`)) {
  const paragraph = document.createElement('p')
  paragraph.setAttribute('id', paragraphId)
  paragraph.innerHTML
    = 'Hello from Training Parcel Web Extension Content Script 🤓'
  paragraph.style.backgroundColor = 'red'
  paragraph.style.color = 'white'
  paragraph.style.fontSize = '2rem'
  document.body.prepend(paragraph)
}