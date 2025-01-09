import React from 'react'
import './App.css'
import {Link} from 'react-router'
function App() {
  return (
    <div className='div'>
        <form action=''>
    <h2>Login page</h2>
    <input type="text" placeholder="Enter Username" name="uname" required/>
    <input type="password" placeholder="Enter Password" name="psw" required/> 
    <button type="submit">Login</button>
  <div className="container">
    <span className="psw">Forgot <Link to="#">password?</Link></span>
    <span className="sign">Don't have a account <Link to="/Signup">Sign up?</Link></span>
  </div>
  </form>
  </div>
)
}

export default App;