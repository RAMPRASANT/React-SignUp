import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
<div>

<div className="landing">
    
    
    <h1>OverStock</h1> &nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" placeholder="Search" className="searchBox"/>&nbsp;&nbsp;
    <Link to="/goods">Search</Link>
    
  </div>

<div className="container">

  <p className="textbox"><strong>DISCOVER THE ONE-STOP SHOP THAT WORKS FOR YOU</strong></p>

  <button className="creation">  <Link to="/search">Create Account</Link> </button>
  
  <p> Already a member? <a href="">Sign In </a> </p>

</div>

</div>
  
);

export default Landing;
