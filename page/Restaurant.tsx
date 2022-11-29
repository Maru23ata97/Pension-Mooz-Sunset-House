import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderRestaurant from '../components/SliderRestaurant';
const Restaurant = () => (
  <div className="bg-Restaurant">
    <Navbar />
    <hr />
    <h3 className="text-center">Nos formules Petit Déjeuner</h3>
    <hr />
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="text-dark">Petit déjeuner American 2750 XPF</h3>
          <hr/>
          <p className="text-dark fw-light mb-3">
            Composition de la formule : <br /> <br/>
            Une assiette de paincake ou de gauffre (4 pièces) <br />
            Une omelette ou deux oeufs sur plat <br />
            Un verre de jus de fruit
            <br />
            <br/>
            Une assiette de fruit <br />
            Une boisson chaude : café, chocolat <br />
            Note : Assiette de fruit selon arrivage et saison
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <SliderRestaurant collectionTarget="american-carrousel" />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="text-dark">Petit déjeuner frnçais 2450 XPF</h3>
          <hr/>
          <p className="text-dark fw-light mb-3">
            Composition de la formule : <br /> <br/>
            Un panier de venoiserie "pain chocolat et croissant" (2 pièces de
            chaque ) <br /> 
            Une boisson chaude : café, chocolat <br />
            Un verre de jus de fruit
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <SliderRestaurant collectionTarget="francais-carrousel" />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="text-dark">Petit déjeuner Tahitien 3950 XPF</h3>
          <hr/>
          <p className="text-dark fw-light mb-3">
            Composition de la formule : <br /><br/>
            Un panier de 5 firi-firi <br />
            Une boisson chaude : café, chocolat <br />
            Une assiette de taiero poisson <br />
            Un poisson cru <br />
            Une assiette de poisson frit <br />
            Une assiette de "Pua Roti" <br />
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <SliderRestaurant collectionTarget="tahitien-carrousel" />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="text-dark">Déjeuner 2500 XPF</h3>
          <hr/>
          <p className="text-dark fw-light">
            <h4 className="text-dark">Plat du jour</h4>
            Nos plats du jour sont réalisé suivant l'arrivage des produits et la
            fraicheur des denrées.
          </p>
        </div>
        <div className="col-md-6">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <SliderRestaurant collectionTarget="dejeuner-carrousel" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="text-dark">Diner 7500 XPF</h3>
            <hr/>
            <p className="text-dark">
              <h3 className="text-dark">Spécialité du chef</h3>
              Afin de régaler vos papilles le chef vous reserve un menu avec des
              produits locaux et frais. Ce menu est composée : d'une entrée, un
              plat résistance, une assiette de frommage et un dessert
            </p>
          </div>
          <div className="col-md-6">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <SliderRestaurant collectionTarget="diner-carrousel" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
);

export default Restaurant;
