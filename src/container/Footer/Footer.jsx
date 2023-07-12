import React from 'react';

// import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
      < div className="app__footer-links_logo">

        <img src={images.artvista1} alt="footer_logo" />
        <p className="p__opensans">&quot;Stepping into the future, together, one click at a time. &quot;</p>
        {/* <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} /> */}
    <div className="footer__copyright">
      <p className="p__opensans">2023 ArtVista🖼️🎭. All Rights reserved.</p>
    </div>
      </div>
  </div>
);

export default Footer;
