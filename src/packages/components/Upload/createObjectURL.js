const createObjectURL = (file) => {
  if(window.createObjectURL) {
    return window.createObjectURL(file)
  }

  if(window.URL) {
    return window.URL.createObjectURL(file)
  }

  if(window.webkitURL)
    return window.webkitURL.createObjectURL(file)
}

export default createObjectURL