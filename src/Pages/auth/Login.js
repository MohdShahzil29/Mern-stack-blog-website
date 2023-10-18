import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <div>
   <div className="container">
  <div className="screen">
    <div className="screen__content">
      <form className="login">
        <div className="login__field">
          <i className="login__icon fas fa-user" />
          <input type="text" className="login__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock" />
          <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <button className="button login__submit">
          <span className="button__text">Log In Now</span>
          <i className="button__icon fas fa-chevron-right" />
        </button>				
      </form>
      <div className="social-login">
      <p className='paragraph-login'>Do not have an account please Register </p>
      </div>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4" />
      <span className="screen__background__shape screen__background__shape3" />		
      <span className="screen__background__shape screen__background__shape2" />
      <span className="screen__background__shape screen__background__shape1" />
    </div>		
  </div>
</div>

    </div>
  )
}

export default Login