import React, { useState } from 'react'

const Register = () => {
  const [name, setName] = useState()
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
          <input type="text" className="login__input" placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div> 
        <div className="login__field">
          <i className="login__icon fas fa-user" />
          <input type="text" className="login__input" placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock" />
          <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="button login__submit">
          <span className="button__text" >Register</span>
          <i className="button__icon fas fa-chevron-right" />
        </button>				
      </form>
      <div className="social-login">
        <p className='paragraph-login'>Already have an account please login </p>
        {/* <h3>log in via</h3>
        <div className="social-icons">
          <a href="#" className="social-login__icon fab fa-instagram" />
          <a href="#" className="social-login__icon fab fa-facebook" />
          <a href="#" className="social-login__icon fab fa-twitter" />
        </div> */}
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

export default Register