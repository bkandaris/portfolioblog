import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className="footer-header">Learning and leveling up every day.</h3>
      <section className='icons'>
        <a href='https://github.com/bkandaris' target='_blank'>
          <i class='fab fa-github fa-2x'></i>
        </a>

        <a
          href='https://www.linkedin.com/in/benjamin-kandaris-37b2b1196/'
          target='_blank'>
          <i class='fab fa-linkedin-in fa-2x'></i>
        </a>
        <a href='https://twitter.com/BKandaris' target='_blank'>
          <i className='icon' class='fab fa-twitter fa-2x'></i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
