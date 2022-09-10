const request = ({
  action,
  data,
  file,
  headers,
  method,
  name
}) => {
  const formData = new FormData()
  formData.append(name, file)

  if(data) {
    for(let key in data) {
      formData.append(key, data[key])
    }
  }

  return new Promise((resolve) => {
    fetch(action, {
      headers,
      method,
      body: formData
    })
    .then((result) => result.json())
    .then((result) => resolve(result))
    .catch((error) => resolve(error))
  })
}

export default request