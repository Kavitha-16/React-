
import React from 'react'
import './App.css'
import {Link} from 'react-router'
function SignUp(){
    return(
        <div className="App">
        <form action="">
            <h2>Sign up</h2>
            <div className="input">
                <input type="text"placeholder="Username" required/>
                <input type="email"placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input type="password" placeholder="Confirm Password" required/>
                
            </div>
            <div className="btn">
                <button type="Submit">Sign up</button>
            </div>
            <span className="sign">Already have a account <Link to="/">Login in</Link></span> 
        </form>
        
    </div>
    );
}
export default SignUp;
