const request = ({
  action,
  file,
  headers,
  method,
  name
}) => {
  const formData = new FormData()
  formData.append(name, file)

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