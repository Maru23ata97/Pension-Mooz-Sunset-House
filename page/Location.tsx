import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderLocation from '../components/SliderLocation';
const Location = () => (
  <div className="bg-Location">
    <Navbar />
    <hr/>
    <hr/>
    <h3 className="page text-center">Nos Locations</h3>
    <hr/>
    <hr/>
    <h4 className="text-center">Nos Voitures</h4>
    <div className="container mt-5">
      <SliderLocation collectionTarget="location-carrousel" />
      <div className="location mb-3 fw-light">
        <p className="text-start">Ma péniche, c'est bien plus qu'une maison. Elle me ressemble. Comme une île entourée d'eau on peut toujours en faire le tour, même les jours de grand vent. Une île qui aurait envie de voyager, comme moi j'ai envie de voler.</p>
        <p>
          <br />
          Durée : 24 heures  <br />
          Prix : 10000 XPF <br />
          Frais de nettoyage : 3000 XPF <br />
          Sans caution <br /><br/>
          Note: En cas de dégradation constater une franchise a hauteur de 55000 XPF, vous sera demander.<br/>
          Le plein d'essence du véhicule doit être fait avant le retour, un reçu vous sera demander.<br/>
          Le nettoyage et le plein de la voiture doit être fait avant le retour, dans le cas contraire une somme de 3000 XPF sera demander.
        </p>
      </div>
<hr/>
<hr/>
      <h3 className="text-center">Nos Scooters</h3>
      <SliderLocation collectionTarget="scooter-carrousel" />
      <div className="location "> 
        <p className="text-start">Ma péniche, c'est bien plus qu'une maison. Elle me ressemble. Comme une île entourée d'eau on peut toujours en faire le tour, même les jours de grand vent. Une île qui aurait envie de voyager, comme moi j'ai envie de voler.</p>
        <p className="text-start fw-light mb-3">
          Durée : 24 heures  <br />
          Prix : 6000 XPF <br />
          Frais de nettoyage : 1000 XPF <br />
          Sans caution <br /><br/>
          Note: En cas de dégradation constater une franchise a hauteur de 40000 XPF, vous sera demander.<br/>
          Le nettoyage et le plein de la voiture doit être fait avant le retour, dans le cas contraire une somme de 1000 XPF sera demander.
        </p>
       </div>
<hr/>
<hr/>
      <h3 className="text-center"> Nos Vélos</h3>
      <SliderLocation collectionTarget="velo-carrousel" />
      <div className="location ">

         <p className="fw-light mb-3"> 
          Durée : ilimités <br />
          Prix : Gratuit <br />
          Note : Nos vélos sont gratuit, mais en cas de dégradation une franchise a hauteur de 10000 XPF, vous sera demander.<br/>
        </p>
      </div>
      <hr/>
      <hr/>
    </div>
    
  </div>
);

export default Location;
