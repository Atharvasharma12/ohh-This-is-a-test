import React from 'react'

import "./SignIn.css";

function SignIn() {
  return (
    <div className='signIn'>

    
        <form action="" className='signInForm'>
        <h3>SIGN IN</h3>
        <span>Username</span><br />
        <input type="email" name="" class="box" placeholder="enter your email" id=""></input><br />
        <span>Password</span><br />
        <input type="password" name="" class="box" placeholder="enter your password" id=""></input><br />
        <input type="submit" value="sign in" class="btn"></input>
        <p>forget password ? <a href="#signin">click here</a></p>
        <p>don't have an account ? <a href="./SignUp">create one</a></p>
        </form>

</div>
  )
}

export default SignIn