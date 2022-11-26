import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderRestaurant from '../components/SliderRestaurant';
const Restaurant = () => (
  <div className="bg-Restaurant">
    <Navbar />
    <p>Nos formules Petit Déjeuner</p>
    <div className="container mt-5">
      <SliderRestaurant collectionTarget="american-carrousel" />

      <div className="restaurant my-2 bg-dark text-white text-center mb-5">
        Petit déjeuner American 2750 XPF
        <p>
          Composition de la formule : <br />
          Une assiette de paincake ou de gauffre (4 pièces) <br />
          Une omelette ou deux oeufs sur plat <br />
          Un verre de jus de fruit<br />
          Une assiette de fruit <br />
          Une boisson chaude : café, chocolat <br/>

         Note : Assiette de fruit selon arrivage et saison
        </p>
      </div>

      <SliderRestaurant collectionTarget="francais-carrousel" />
      <div className="restaurant my-2 bg-dark text-white text-center mb-5">
        Petit déjeuner Français 1950 XPF
        <p>
          Composition de la formule : <br />
          Un panier de venoiserie "pain chocolat et croissant" (2 pièces de chaque ) <br />
          Une boisson chaude : café, chocolat <br />
          Un verre de jus de fruit<br/>
        </p>
      </div>

      <SliderRestaurant collectionTarget="tahitien-carrousel" />
      <div className="restaurant my-2 bg-dark text-white text-center">
        Petit déjeuner Tahitien 3500 XPF
        <p>
          Composition de la formule : <br />
          Un panier de 5 firi-firi <br />
          Une boisson chaude : café, chocolat <br />
          Une assiette de taiero poisson <br/>
          Un poisson cru <br/>
          Une assiette de poisson frit <br/>
          Une assiette de "Pua Roti" <br/>
          
        </p>
      </div>
      <SliderRestaurant collectionTarget="dejeuner-carrousel" />
      <div className="restaurant my-2 bg-dark text-white text-center">
        Déjeuner 2500 XPF
        <p>
          Plat du jour <br />
          Nos plats du jour sont réalisé suivant l'arrivage des produits et la fraicheur des denrées.
        </p>
      </div>
      <SliderRestaurant collectionTarget="diner-carrousel" />
      <div className="restaurant my-2 bg-dark text-white text-center">
        Diner 7500 XPF
        <p>
          Spécialité du chef<br />
        Afin de régaler vos papilles le chef vous reserve un menu avec des produits locaux et frais.
        Ce menu est composée : d'une entrée, un plat résistance, une assiette de frommage et un dessert 
        </p>
      </div>
    </div>
  </div>
);

export default Restaurant;
