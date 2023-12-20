// WelcomeSection.jsx
import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h1 className='po' style={{color:'red',fontSize:'45px',fontWeight:'bolder'}}>Welcome to Matsya Portal!</h1>
      <p>
        <p style={{ color: 'black',fontSize:'20px',fontWeight:'medium' }}>Are you ready to take control of your safety during flood events?</p>
        <div style={{color:'black',fontSize:'15px'}}>
        Welcome to our Flood Alarm and Management Tool – the ultimate resource for citizens
        like you to stay informed, prepared, and empowered in the face of flooding.
        Floods can be devastating, but with the right information and tools, you can minimize
        the risks and protect your loved ones and property. Here's why our platform is your
        go-to resource for flood management:
        </div>
     
      </p>
      <ul>
      <p style={{ color: 'blue',fontWeight:'bold'}}>Why choose us?</p>
        <li style={{color:'red',fontSize:'18px'}}>Real-Time Alerts: Get instant notifications as flood levels rise.</li>
        <li style={{color:'red',fontSize:'18px'}}>Historical Data: Understand past trends and prepare for the future.</li>
        <li style={{color:'red',fontSize:'18px'}}>Evacuation Plans: Find the quickest routes and shelter locations.</li>
        <li style={{color:'red',fontSize:'18px'}}>Preparedness Tips: Learn how to safeguard your home and family.</li>
        <li style={{color:'red',fontSize:'18px'}}>Community Hub: Connect with neighbors and strengthen resilience.</li>
      </ul>
      <p style={{color:'black',fontWeight:'normal'}}>
        We're proud to be the first in India, following the footsteps of the USA, to bring
        you this flood management tool.
      </p>
      <h3 style={{ color: 'blue',fontWeight:'bolder' }}>Get Started:</h3>
      <p>
        <strong  style={{color:'black',fontWeight:'bolder'}}>Location:</strong> Enter or auto-detect your area.
        <br />
        <strong style={{color:'black',fontWeight:'bolder'}}>Stay Safe:</strong> Receive alerts and explore resources.
      </p>
      <p style={{color:'black',fontWeight:'bolder'}}>Together, we build a flood-ready community.</p>
      <p style={{color:'black',fontWeight:'bolder'}}>
        <strong >Sign Up | Learn More</strong>
      </p>
    </div>
  );
};

export default WelcomeSection;
