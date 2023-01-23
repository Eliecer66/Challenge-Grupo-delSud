import './App.css';
import Nav from './Components/Nav.js';
import Intro from './Components/Intro.js';
import Body from './Components/Body.js';
import Questions from './Components/Questions';
import Contact from './Components/Contact.js'
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import React from 'react';

function App() {
  return (
    <div id="app">
      <Nav />
      <Intro />
      <Body />
      <Questions />
      <Contact />
      <Footer />
      <Modal />
    </div>

  );
}

export default App;
