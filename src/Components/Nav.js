import React from 'react';
import{Link} from 'react-router-dom'

function Nav() {

    

  return (
    <div>
      <nav>
        <h3>Invisalign</h3>
        <ul className="nav-links">
        <Link className="navStyle"  to= "/"> 
          <li>Home</li>  
          </Link>
          <Link className="navStyle text-center"  to= "/About"> 
          <li>About</li> 
          </Link>
          <Link className= "navStyle" to="/Shop"> 
          <li>Shop</li> 
          </Link>
        </ul>
      </nav> 
    </div>
  );
}

export default Nav;
