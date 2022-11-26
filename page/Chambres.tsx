import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderChambres from '../components/SliderChambres';
const Chambres = () => (
  <div className="bg-chambres">
    <Navbar />
    <div className="container mt-5">
      <SliderChambres collectionTarget="room-carrousel" />

      <div className="chambre my-2 bg-dark text-white text-center mb-5">
        Nos chambres en pilotis
        <p>
          Descrption de nos pilotis <br />
          Capacités d'accueil : 4 personnes <br />
          Format du lit : king size <br />
          Format du canape-lit : king size <br />
          Vue sur mer <br />
          Tous nos pilotis sont équipés d'une climatisation, d'une salle de bain
          privative, d'un mini-bar, d'une douche extérieur et un accés a la mer
        </p>
      </div>

      <SliderChambres collectionTarget="bungalows-carrousel" />
      <div className="chambre my-2 bg-dark text-white text-center mb-5">
        Nos chambres en bungalows jardin
        <p>
          Descrption de nos bungalows <br />
          Capacités d'accueil : 2 personnes <br />
          Format du lit : king size <br />
          Tous nos bungalows sont équipés d'une climatisation, d'une salle de
          bain privative, d'un mini-bar, d'une douche extérieur, un accés au
          jardin et a la mer.
        </p>
      </div>

      <SliderChambres collectionTarget="simple-carrousel" />
      <div className="chambre my-2 bg-dark text-white text-center">
        Nos chambres simple
        <p>
          Descrption de nos chambres simple <br />
          Capacités d'accueil : 1 à 2 personnes <br />
          Format du lit : king size <br />
          Tous nos chambres simple sont équipés d'une salle de bain privative,
          d'un mini-bar, d'une douche extérieur, un accés au jardin et a la mer.
        </p>
      </div>
    </div>
  </div>
);

export default Chambres;
