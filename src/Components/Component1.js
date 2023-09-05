import React from 'react'
import './Component1.css'
const Component1 = () => {
  return (
    <div className='parent'>
      <div className='navbar'>
        <h1 className='logo'>NETFLIX</h1>
        <div className='navright'>
        <div className='checkbox'>
            <h3>English</h3>
        </div>
        <button>Sign in</button>
        </div>
      </div>
      <div className="content">
        <h1>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <input type="email" name="" id="input" placeholder='Email address' />
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Component1
