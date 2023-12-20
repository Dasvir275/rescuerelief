// HomePage.jsx
import React, { useState } from 'react';
import './HomePage.css';
import WelcomeSection from './WelcomeSection';

import MATSYA from './homeimages/matsya.png';
import SearchIcon from './homeimages/search.svg';
import UserIcon from './homeimages/user.svg';
import LanguageIcon from './homeimages/lang.svg';
import HelpIcon from './homeimages/help.svg';
import bGimg from './homeimages/bGimg.jpg';
import Logo from './homeimages/govtlogo.png';
import { Link } from 'react-router-dom';
import { ContactUs } from '../../components/ContactUs';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`app ${isMenuOpen ? 'menu-open' : ''}`}>
      <nav className="navbar">
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className="portal-name">
          <img src={MATSYA} alt="MATSYA Logo" />
          <p>MATSYA</p>
        </div>
        <div className="search-bar">
          <img src={SearchIcon} alt="Search Icon" className="search-icon" />
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <div className="navbar-icons">
          <div className="language-button">
            <img src={LanguageIcon} alt="Language Icon" className="lang-icon" />
            <select>
              <option value="" disabled>
                Select Language
              </option>
              <option value="hindi">Hindi</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
            </select>
          </div>
          <img src={UserIcon} alt="Account Icon" className="user-icon" />
          <img src={HelpIcon} alt="Help Icon" className="help-icon" />
        </div>
      </nav>

      <div className={`menu ${isMenuOpen ? 'menu-open1' : ''}`}>
       <div className='new'>
       <p className='interface' ><Link to='/home'><button>Home</button></Link></p>
        <p className='interface'><Link to='https://dasvir275.github.io/sihweather/'><button>Weather Forecast</button></Link></p>
        <p className='interface'><Link to=''><button>Alerts</button></Link></p>
        <p className='interface'><Link to='/rescue'><button>Rescue And Relief Info</button></Link></p>
        <p className='interface'><Link to=''><button>Real Time Flood Analysis</button></Link></p>
        <p className='interface'><Link to='https://code.earthengine.google.com/cc06d02fbedf4c566b590d335ac741d2'><button>Spatial and Water Gauge Anaylsis</button></Link></p>
        <p className='interface'><Link to='https://ee-dasvirsingh07.projects.earthengine.app/view/sihany'><button>Past Anaylsis</button></Link></p>

       </div>
      
    
      </div>

      <div className="bg-image">
      <img src={bGimg} alt="" />
      </div>

      <WelcomeSection />
<ContactUs/>
      <footer className="footer">
        <p1>Powered By </p1>
        <div className="jal-shakti">
          <p2>Ministry of Jal Shakti</p2>
          <img src={Logo} alt="Ministry Logo" />
        </div>
        <p3>© Copyright SIH’23 Inn1vation Commandos</p3>
      </footer>
    </div>
  );
};

export default HomePage;
