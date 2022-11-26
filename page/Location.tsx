import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderLocation from '../components/SliderLocation';
const Location = () => (
  <div className="bg-Location">
    <Navbar />
    <p className="page mt-5 my-2 bg-dark text-white text-center mb-5">Nos Locations</p>
    <div className="container mt-5">
      <SliderLocation collectionTarget="location-carrousel" />

      <div className="location my-2 bg-dark text-white text-center mb-5">
        Nos Voitures<br/>
        Ma péniche, c'est bien plus qu'une maison. Elle me ressemble. Comme une île entourée d'eau on peut toujours en faire le tour, même les jours de grand vent. Une île qui aurait envie de voyager, comme moi j'ai envie de voler.
        <p>
          <br />
          Durée : 24 heures  <br />
          Prix : 10000 XPF <br />
          Frais de nettoyage : 3000 XPF <br />
          Sans caution <br />
          Note:<br/> En cas de dégradation constater une franchise a hauteur de 55000 XPF, vous sera demander.<br/>
          Le plein d'essence du véhicule doit être fait avant le retour, un reçu vous sera demander.<br/>
          Le nettoyage et le plein de la voiture doit être fait avant le retour, dans le cas contraire une somme de 3000 XPF sera demander.
        </p>
      </div>

      <SliderLocation collectionTarget="scooter-carrousel" />
      <div className="location my-2 bg-dark text-white text-center mb-5">
        Nos Scooter
        Ma péniche, c'est bien plus qu'une maison. Elle me ressemble. Comme une île entourée d'eau on peut toujours en faire le tour, même les jours de grand vent. Une île qui aurait envie de voyager, comme moi j'ai envie de voler.
        <p>
          <br />
          Durée : 24 heures  <br />
          Prix : 6000 XPF <br />
          Frais de nettoyage : 1000 XPF <br />
          Sans caution <br />
          Note:<br/> En cas de dégradation constater une franchise a hauteur de 40000 XPF, vous sera demander.<br/>
          Le nettoyage et le plein de la voiture doit être fait avant le retour, dans le cas contraire une somme de 1000 XPF sera demander.
        </p>
       </div>

      <SliderLocation collectionTarget="velo-carrousel" />
      <div className="location my-2 bg-dark text-white text-center">
        Nos Vélos
        <p>
         <br />
          
          Durée : ilimités <br />
          Prix : Gratuit <br />
          Note : Nos vélos sont gratuit, mais en cas de dégradation une franchise a hauteur de 10000 XPF, vous sera demander.<br/>
        </p>
      </div>
    </div>
  </div>
);

export default Location;
