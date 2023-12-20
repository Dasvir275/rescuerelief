// GetStartedPage.js

import React from 'react';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GetStartedPage.css';

import MATSYA from './images/matsya.png';
import Logo from './images/govtlogo.png';

import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import Img5 from './images/img5.png';
import Img6 from './images/img6.png';
import { Link } from 'react-router-dom';

const GetStartedPage = () => {
  return (
    <div className="get-started-page">
      <Navbar className='navbar'>
      <div>    
        <img src={MATSYA} alt="MATSYA Logo"  width='60px' height='100px'/>
        <p style={{fontSize:'30px',fontWeight:'bolder',color:'white'}}>Matysa Portal</p>
        </div>
  
        <Nav className="ml-auto">
          <Nav.Link href="http://127.0.0.1:5500/fastflood.org/index.html">Bhuvan-Portal</Nav.Link>
          <Nav.Link href="https://cwc.gov.in/">Ministry Jal Shakti</Nav.Link>
        </Nav>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100"  style={{opacity:'0.3'}} src={Img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{opacity:'0.3'}} src={Img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{opacity:'0.3'}} src={Img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{opacity:'0.3'}} src={Img4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{opacity:'0.3'}} src={Img5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{opacity:'0.3'}} src={Img6} alt="Sixth slide" />
        </Carousel.Item>
      </Carousel>

      <div className="hero-content main">
      <h1 style={{color:'black'}}>Welcome TO Matysa Portal Real Time<div class="roller">
      <span id="rolltext">Flood Indundation<br/>
      Live Alerts<br/>
      Rescue,Relief<br/>
      <h1 id="spare-time">Want you Try?Seamless Experience</h1><br/>
      </span>
      </div>
      </h1>
      
      <div className='' style={{margin:'10px'}}>
      <button className="get-started-button"><Link to="/login">Get Started</Link></button>
      </div>
      
      </div>

      <footer className="footer">
          <p1>Powered By: Ministry of Jal Shakti</p1>
        <p3>© Copyright SIH’23 Inn1vation Commandos</p3>
      </footer>
    </div>
  );
};

export default GetStartedPage;
