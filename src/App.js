import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>  
        <Services></Services>
        <Gallery></Gallery>
        <section className="page-section bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-4">Download my resume for more informations!</h2>
                <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Resume!</a>
            </div>
        </section>
        <Contact></Contact>

        <footer className="bg-light py-5">
            <div className="container"><div className="small text-center text-muted">Copyright © 2020 - Harun Hadzic</div></div>
        </footer>
    </div>
  );
}

export default App;
