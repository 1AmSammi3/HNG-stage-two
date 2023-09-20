import React from 'react';
import Style from './Navbar.css';
import Bot from './Bot';
import Menu from './Menu';
import
"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";

const Navbar = () => {
  return(
    <div className="container">
      <div className = "logo">
        <Bot />
        <span>Logo Header</span>
      </div>
      <Menu />
    </div>  
  );
}

export default Navbar;