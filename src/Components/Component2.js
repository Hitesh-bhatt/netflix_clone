import React from 'react'
import './Component2.css'
const Component2 = () => {
  return (
    <div className='parent1'>
        <div className="left">
            <h1>Enjoy on your TV</h1>
            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
        </div>
        <div className="right">
        <video src="./video-devices-in.m4v" controls></video>
        </div>
    </div>
  )
}

export default Component2
