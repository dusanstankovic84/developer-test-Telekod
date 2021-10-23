import React from 'react';
import './Header.css';

// header

export const Header = ({ setToken, token }) => {

  const logout = () => {            // helper function for logout button
    setToken("");
    localStorage.clear()
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-header">
      <div className="container">
        <a className="navbar-brand" href="/">
          Dušan Stanković - Developer Test #6
        </a>
        <ul className="navbar-nav ">
          {token.length > 10 && (
            <li className="nav-item">
              <button className="btn btn-dark" type="button" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}