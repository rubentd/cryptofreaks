import React from 'react';
import { node } from 'prop-types';
import { Link } from 'react-router-dom';
import logo from 'img/logo.svg';

const Layout = (props) => (
  <div className="app">
    <header>
      <Link to="/" className="brand-name">
        <img alt="logo" src={logo} />
        <span>CryptoFreaks</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/catalogue">
              Catalogue
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              My monsters
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="main">
      { props.children }
    </div>
  </div>
);

Layout.propTypes = {
  children: node,
}

export default Layout;
