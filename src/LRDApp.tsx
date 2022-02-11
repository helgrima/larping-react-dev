import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { VERSION } from "Version";

import 'LRDApp.css';

function LRDApp() {
  return (
    <div>
      <header className="header">
        <h1 className="caption">{`Larping react dev version ${VERSION}`}</h1>
      </header>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="components">Components</Link>
        <Link to="dashboard">Dashboard</Link>
      </nav>

      <div className="main">
        <Outlet />
      </div>

      <footer className="footer">
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default LRDApp;
