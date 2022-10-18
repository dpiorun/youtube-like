import React from 'react';
import './Topbar.css';
import logo from '../assets/images/youtube-like.png';
import { Search, User } from 'react-feather';

const Topbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="searchcontainer">
        <div className="input-group-merge input-group">
          <input className="form-control" placeholder="Search" />
          <button className="input-group-text search-btn">
            <Search size={'1.5em'} />
          </button>
        </div>
      </div>
      <div className="end">
        <button className="sign-in-btn">
          <User size={'1.3em'} />
          <span className="sign-in-btn-text">SIGN IN</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
