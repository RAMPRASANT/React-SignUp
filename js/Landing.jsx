import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
<div>

<div className="landing">
    
    
    <h1><img src="/public/img/logo.jpg" alt="logo" /> </h1> &nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" placeholder="Search" className="searchBox"/>&nbsp;&nbsp;
    <Link to="/goods">Search</Link>
    
  </div>

<hr className="topline"/>

<div className="container">

  <p className="textbox"><strong>DISCOVER THE ONE-STOP SHOP THAT WORKS FOR YOU</strong></p>

  <button className="creation">  <Link to="/signup">Create Account</Link> </button>
  
  <p> Already a member? <a href=""><Link to="/signin">Sign In </Link></a> </p>

  <div className="productimage">

<img src="/public/img/products.jpg" alt="products" />
  </div>
  <hr className="bottomline"/>  
</div>

</div>
  
);

export default Landing;
