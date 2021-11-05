
export default function FormLogin({username, password, handleLoginSubmit, ...props}){

  return(
    <form onSubmit={handleLoginSubmit}>
    <div>
      <input
        type='text'
        value={username}
        name='Username'
        placeholder='Username'
        onChange={props.handleUsernameChange}
        />
    </div>
    <div>
      <input
        type='password'
        value={password}
        name='password'
        placeholder='Password'
        onChange={props.handlePasswordChange}
        />
    </div>
      <button>
        Login
      </button>
  </form>
  )
}