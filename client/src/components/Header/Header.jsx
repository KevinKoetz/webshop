import React from 'react';
import NavBar from '../NavBar/NavBar';
import Logo from '../../images/Logo.png' ; 
import './Header.css'; 


const Header = () => {
  return <div className="header">
        <div className="logo"> 
        <img src={Logo} alt="" /> 
        </div> 
      <div className="menu"> 
       <NavBar /> 
      </div>
  </div>;
};

export default Header; 
