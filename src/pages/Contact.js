import React, { useState } from 'react';
import './Contact.css';
import githubLogo from '../assets/ghub.png';
import linkedinLogo from '../assets/linkedin.png';
import emailLogo from '../assets/email.png';
import instaLogo from '../assets/insta.png';
import discordLogo from '../assets/discord.png';
import xLogo from '../assets/x.png';

const Contact = () => {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  return (
      <>
        <div className="contact-container">
          <div
              className={`contact-half left-half ${leftHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setLeftHovered(true)}
              onMouseLeave={() => setLeftHovered(false)}
          >
            <div className="contentl">
              <h1>work</h1>
              <div className="social-links">
                <div className="social-item">
                  <img src={githubLogo} alt="GitHub" className="social-logo" />
                  <a href="https://github.com/joshamstutz" target="_blank" rel="noopener noreferrer" className="username">joshamstutz</a>
                </div>
                <div className="social-item">
                  <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                  <a href="https://linkedin.com/in/josh-amstutz" target="_blank" rel="noopener noreferrer" className="username">in/josh-amstutz</a>
                </div>
                <div className="social-item">
                  <img src={emailLogo} alt="Email" className="social-logo" />
                  <a href="mailto:josha.amstutz@gmail.com" className="username">josha.amstutz@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div
              className={`contact-half right-half ${rightHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setRightHovered(true)}
              onMouseLeave={() => setRightHovered(false)}
          >
            <div className="contentr">
              <h1>life</h1>
              <div className="social-links">
                <div className="social-item">
                  <img src={instaLogo} alt="Instagram" className="social-logo" />
                  <a href="https://instagram.com/josh.amstutz" target="_blank" rel="noopener noreferrer" className="username">josh.amstutz</a>
                </div>
                <div className="social-item">
                  <img src={xLogo} alt="X" className="social-logo" />
                  <a href="https://x.com/josh_amstutz" target="_blank" rel="noopener noreferrer" className="username">josh_amstutz</a>
                </div>
                <div className="social-item">
                  <img src={discordLogo} alt="Discord" className="social-logo" />
                  <a href="https://discord.com/users/joshamstutz" target="_blank" rel="noopener noreferrer" className="username">joshamstutz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Contact;