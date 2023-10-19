console.info('Hello from Training Parcel Web Extension Service Worker 🤓')

chrome.runtime.onInstalled.addListener(details => {
  switch (details.reason) {
    case 'install':
      console.info('Extension installed')
      break
    case 'update':
      console.info('Extension updated')
      break
    default:
      break
  }
})