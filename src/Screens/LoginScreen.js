import React, {useState} from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';
import logo from "../images/resume_logo.png";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className='loginScreen'>

        <div className='loginScreen__background'>
            <img 
            className='loginScreen__logo'
            src={logo}
            alt=""
            />
            <button onClick={() => setSignIn(true)} 
                className='loginScreen__button'>
                Sign In
            </button>
            <div className='loginScreen__gradient'/>
        </div>

        <div className='loginScreen__body'>
            {signIn ? (
                <SignUpScreen email={email}/>
            )
            : (
                <>
                    <h1>Welcome to Naresh's Personal space</h1>
                    <h2>Want to know more about me!</h2>
                    <h3>Enter your email to start exploring</h3>

                    <div className='loginScreen__input'>
                        <form>
                            <div>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email Address"/>
                                <button 
                                    onClick={() => setSignIn(true)}
                                    className='loginScreen__getStarted'>
                                    GET STARTED
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )
            }
        </div>
    </div>
  )
}

export default LoginScreen