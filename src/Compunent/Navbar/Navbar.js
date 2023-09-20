import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" href="#">CRUd</Link>
   
    <div className=" navbar-collapse" id="navbarText">
     
      <span className="mr-auto">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/addUser'>InsertData</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Login</Link>
        </li>
      </ul>
      </span>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;