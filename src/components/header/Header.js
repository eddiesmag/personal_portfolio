import React from 'react';
import Headroom from 'react-headroom';

import './styles/Header.scss';
const Header = () => {
  return (
    <Headroom>
      <header className="dark-menu">
        <a href="/" className="">
          <span className="grey-color">&lt;</span>
          <span>Smag Eddie</span>
          <span className="grey-color">&gt;</span>
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label
          htmlFor="menu-btn"
          className="menu-icon"
          style={{ color: 'white' }}
        >
          <span
            className={'isDark' ? 'navicon navicon-dark' : 'navicon'}
          ></span>
        </label>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Work Experimces</a>
          </li>
          <li>
            <a href="#openSource">Open Source</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#talks">Talks</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {/* add Toggle switch */}
        </ul>
      </header>
    </Headroom>
  );
};

export default Header;
