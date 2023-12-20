import React, { useState } from 'react';
import './signStyles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BgImage from '../images/bgimage.png';
import GoogleIcon from '../images/googleicon.svg';
//import ArrowIcon from './images/arrowicon.svg';
import UserIcon from '../images/usericon.svg';
import MailIcon from '../images/mailicon.svg';
import LockIcon from '../images/lockicon.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [UserId,setUserId]=useState('');
    const navigate=useNavigate('');

    function handelsubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/api/v1/signup',{email,password,UserId})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        toast("sIGN Up Succesfully!");
        navigate('/login');
    }
  return (
    <>
     <marquee className="blink"><h1 className='b1'>Welcome to Matysa Real time Flood Indundation Tool .</h1></marquee>
     <ToastContainer/>
    <div className="login-container">
     
    <div className="login-bg">
      <img className="bgimage" src={BgImage} alt="Background" />
    </div>
    <div className="title">
      <div className="main-title">MATSYA</div>
      <div className="sub-title">A Flood Protection and Prevention Tool</div>
    
    </div>
    <div className="login-form">
    <div className="left-content">
<div className="left-text">
  <p style={{ fontSize: '27px', lineHeight: '1.5', marginBottom: '10px', fontWeight: 'bold' }}>Matsya - A flood management system </p>
  <div className="heading-line"  ></div>   <br />
  <p style={{ fontSize: '12px', marginBottom: '10px' }}>Cookies must be enabled in your browser</p>
  <p style={{ fontSize: '20px', marginBottom: '10px' }}>Is this your first time here?</p>
  <p style={{ fontSize: '15px', marginBottom: '10px' }}>
    Our platform utilizes advanced machine learning models to provide you with real-time inundation level values and essential flood-related information. Empowering citizens with accurate data, this tool assists in making informed decisions during flood events. We will help you.
  </p>
  <p style={{ fontSize: '20px', marginBottom: '10px' }}>Stay Safe and Stay Healthy.</p>
</div>
</div>

      <div className="right-content">
        <h1 className="login-heading" style={{ margin: '30px 0 ', marginLeft: '90px' }}>
          User Details
        </h1>
        <div className="input-container">
<img src={UserIcon} alt="User Icon" className="input-icon" />
<select
  id="userId"
  value={UserId}
  onChange={(e) => setUserId(e.target.value)}
>
  <option value="" disabled>Select User Type</option>
  <option value="governmentAdmin">Government Admin</option>
  <option value="citizenOfIndia">Citizen of India</option>
</select>
</div>
        <div className="input-container">
          <img src={MailIcon} alt="Mail Icon" className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <img src={LockIcon} alt="Lock Icon" className="input-icon" />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button className="login-btn" onClick={handelsubmit}>
          Sign Up
        </button>
        
        <div className="middle-txt">
<div className="left-line"></div>
<p>OR</p>
<div className="right-line"></div>
</div>

        

        <button className="google-btn" style={{ color: '#414658' }}>
          <img src={GoogleIcon} alt="Google Icon" />
          <p className="google-btn-txt"><Link to="/login">Already User</Link></p>
        </button>
      </div>
    </div>
  </div>
  </>
  );
}

export default Signup;
