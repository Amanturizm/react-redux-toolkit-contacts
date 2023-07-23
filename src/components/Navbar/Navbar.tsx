import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-primary position-fixed w-100 z-1 px-5">
    <div className="d-flex w-100">
      <Link className="navbar-brand text-white" to="/">Contacts</Link>
    </div>
    <div>
      <Link to="/contacts/new-contact" className="text-white text-nowrap text-decoration-none">Add new contact</Link>
    </div>
  </nav>
);

export default NavBar;