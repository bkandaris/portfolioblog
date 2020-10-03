import React from 'react';

function Navbar() {
  return (
    <div className='nav-wrapper'>
      <h3 className='nav-header'>BK</h3>
      <ul className='nav-link-wrapper'>
        <li className='nav-link'>
          <a>Projects</a>
        </li>
        <li className='nav-link'>
          <a>Contact</a>
        </li>
        <li className='nav-link'>
          <a>Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
