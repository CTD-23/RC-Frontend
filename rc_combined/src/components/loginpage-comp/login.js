import React from 'react';
import './login.css';

export default function login() {
  return (
    <>
    <div className="login-box">
        <h2>Login</h2>
        <form method="post">
            <div className="user-box">
                <input type="text" name="username" required="true" />
                <label>Username</label>
            </div>
            <div className="user-box">
                <input type="password" name="password" required="" />
                <label>Password</label>
            </div>


            <div className="im-buttons">
                <label className="radio" id="a-button">
                    <input name="im-buttons" type="radio" id="a-button" checked="checked" />
                    <span>Junior</span></label><label className="radio" id="b-button"><input name="im-buttons"
                        type="radio" id="b-button" /><span>Senior</span></label></div>
            <button className="login-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </button>
        </form>
    </div>
    <div className="clear"></div>
    </>
  )
}
