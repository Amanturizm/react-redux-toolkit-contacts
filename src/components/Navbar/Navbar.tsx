import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-primary position-fixed w-100 z-3">
    <div className="d-flex mx-5 w-100">
      <Link className="navbar-brand text-white" to="/">Contacts</Link>
    </div>
    <Link to="/new-contact" />
  </nav>
);

export default NavBar;