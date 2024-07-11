import React from 'react';
import './signinForm.css';

const SignIn = ({ show, onClose }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="signin-overlay">
        <div className="signin-container">
            <div className="close-btn">
             <button onClick={onClose}>X</button>
            </div>          
          <h2>Sign in to your account</h2>
          <form className='signin-form'>
            <label className='form-label'>
              Email Address<br/>
              <input className='form-input' type="email" name="email" placeholder='Enter Your Email' required />
            </label>
            <label>
              Password <a className='forgot-passwd' href="#">Forget Password</a><br/>
              <input className='form-input' type="password" name="password" placeholder='Enter Your Password' required />
            </label>
            <div className="signin-actions">
              <button type="submit">LOGIN</button>
            </div>
          </form>
          <div className="or-connect-container">
                <hr />
                <span style={{fontWeight:"700"}}>Don't have an account?</span>
                <hr />
            </div>
          <div className="create-account">
            <button>CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    );
};

export default SignIn;