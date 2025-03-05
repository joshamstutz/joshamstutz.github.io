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
                <span className="username">joshamstutz</span>
              </div>
              <div className="social-item">
                <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                <span className="username">in/josh-amstutz</span>
              </div>
              <div className="social-item">
                <img src={emailLogo} alt="Email" className="social-logo" />
                <span className="username">josha.amstutz@gmail.com</span>
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
                <span className="username">josh.amstutz</span>
              </div>
              <div className="social-item">
                <img src={xLogo} alt="X" className="social-logo" />
                <span className="username">josh_amstutz</span>
              </div>
              <div className="social-item">
                <img src={discordLogo} alt="Discord" className="social-logo" />
                <span className="username">joshamstutz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;