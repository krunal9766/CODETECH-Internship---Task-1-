import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
 
function Signup() {
  return (
    <div >
      <form>
        <div class="signup-container">
          <h1>Sign Up</h1>
            <hr/>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

          {/* <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label> */}

          {/* <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p> */}
          
          <div>
            <Link className="text-primary nav-link fw-bold" to="/">Already have an account?</Link>
          </div>
          <br/>
          <div class="clearfix">
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup




{/* <div>
       <form>
        <div class="signup-container">
          <h1>Sign Up With</h1>
            <br/>
            <hr />
          
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

          <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>

          <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

          <div class="clearfix">
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
    </div> */}