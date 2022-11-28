import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderChambres from '../components/SliderChambres';
const Chambres = () => (
  <div className="bg-chambres">
    <Navbar />
    <hr />
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="text-dark">Nos chambres en pilotis</h3>
          <h4 className="text-dark">
            Descrption de nos pilotis <br />
            Capacités d'accueil : 4 personnes <br />
            Format du lit : king size <br />
            Format du canape-lit : king size <br />
            Vue sur mer <br />
            Tous nos pilotis sont équipés d'une climatisation, d'une salle de
            bain privative, d'un mini-bar, d'une douche extérieur et un accés a
            la me
          </h4>
        </div>
        <div className="col-md-6">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <SliderChambres collectionTarget="room-carrousel" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="text-dark">Nos chambres en bungalows</h3>
            <h4 className="text-dark">
              Descrption de nos bungalows <br />
              Capacités d'accueil : 2 personnes <br />
              Format du lit : king size <br />
              Vue sur mer <br />
              Tous nos bungalows sont équipés d'une climatisation, d'une salle
              de bain privative, d'un mini-bar, d'une douche extérieur et un
              accés au jardin et mer.
            </h4>
          </div>

          <div className="col-md-6">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <SliderChambres collectionTarget="bungalows-carrousel" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="text-dark">Nos chambres simple</h3>
            <h4 className="text-dark">
              Descrption de nos chambres simple <br />
              Capacités d'accueil : 1 à 2 personnes <br />
              Format du lit : king size <br />
              Tous nos chambres simple sont équipés d'une salle de bain
              privative, d'un mini-bar, d'une douche extérieur, un accés au
              jardin et a la mer.
            </h4>
          </div>
          <div className="col-md-6">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <SliderChambres collectionTarget="simple-carrousel" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
);

export default Chambres;
