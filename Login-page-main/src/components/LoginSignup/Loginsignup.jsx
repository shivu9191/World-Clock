import React, { useState } from 'react';
import './Loginsignup.css';
import email from '../Assets/mail.png';
import person from '../Assets/user.png';
import password from '../Assets/password.png';
// import login from '../Assets/icons8-login-48.png';

const Loginsignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [loginType, setLoginType] = useState("Select login type");

    const handleLoginTypeChange = (e) => {
        setLoginType(e.target.value);
    };

    return (
        <div className='container'>
            <div className='Header'>
                
                <div className='text'>{action}</div>
                <div className="underline"></div>
                <div className="inputs">
                    {action === "Login" ? <div className='input'>
                    
                    </div> : <div className='input'>
                        <img src={person} alt="" className='icon' />
                        <input type="text" placeholder='Name' />
                    </div>}

                    


                    <div className='input'>
                        <img src={email} alt="" className='icon' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className='input'>
                        <img src={password} alt="" className='icon' />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password <span>Click Here!</span></div>}

                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                </div>

            </div>

        </div>
    );
}

export default Loginsignup;
