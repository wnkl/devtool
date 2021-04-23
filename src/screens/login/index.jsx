export const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL

  const login = (param) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(param),
    })
  }
  const handleButtonSubmit = (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const password = e.target[1].value
    login({ username: username, password: password })
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
  }
  return (
    <form action="" onSubmit={handleButtonSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input id={'username'} type="text" />
      </div>
      <div>
        <label htmlFor="password">passwrod</label>
        <input id={'password'} type="text" />
      </div>
      <button type={'submit'}>Sign in</button>
    </form>
  )
}
