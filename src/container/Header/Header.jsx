import React from 'react';


import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Unleash your imagination </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>in a boundless world of virtual artistry </p>
      <button type="button" className="custom__button">Explore Now</button>
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.welcome} alt="header_img" /> */}
      <div className="box">
        <span style={{ '--i': 1 }}>
          <img src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80" alt="" />
        </span>
        <span style={{ '--i': 2 }}>
          <img src="https://images.unsplash.com/photo-1549834185-bd9f078a5dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </span>
        <span style={{ '--i': 3 }}>
          <img src="https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
        </span>
        <span style={{ '--i': 4 }}>
          <img src="https://images.unsplash.com/photo-1576495169018-bd2414046c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80" alt="" />
        </span>
        <span style={{ '--i': 5 }}>
          <img src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=448&q=80" alt="" />
        </span>
        <span style={{ '--i': 6 }}>
          <img src="https://images.unsplash.com/photo-1578320340743-0314d3d66851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=488&q=80" alt="" />
        </span>
        <span style={{ '--i': 7 }}>
          <img src="https://images.unsplash.com/photo-1584727638096-042c45049ebe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=478&q=80" alt="" />
        </span>
        <span style={{ '--i': 8 }}>
          <img src="https://images.unsplash.com/photo-1578301978162-7aae4d755744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" alt="" />
        </span>
      </div>
    </div>
    </div>
);

export default Header;
