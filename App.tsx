import * as React from 'react';
import './style.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Footer/>
      <h1></h1>
      <p></p>
    </div>
  );
}
