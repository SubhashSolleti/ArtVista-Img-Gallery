import React from 'react';

import { AboutUs, FindUs, Footer, Header, Navbar } from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <FindUs />
    <AboutUs />
    <Footer />
  </div>
);

export default App;
