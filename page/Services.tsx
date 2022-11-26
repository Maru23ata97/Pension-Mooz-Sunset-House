import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderServices from '../components/SliderServices';
const Services = () => (
  <div className="bg-Services">
    <Navbar />
    <p>
      Nos services évènementiels <br />
      Veuillez vous rapprocher de notre réception pour toutes autres
      informations.
    </p>
    <div className="container mt-5">
      <SliderServices collectionTarget="mariage-carrousel" />

      <div className="chambre my-2 bg-dark text-white text-center mb-5">
        Décoration du site pour un mariage
        <p>Le prix de la prestation varie suivant la demande du client.</p>
      </div>

      <SliderServices collectionTarget="bh-carrousel" />
      <div className="chambre my-2 bg-dark text-white text-center mb-5">
        Décoration du site pour un anniverssaire
        <p>Le prix de la prestation varie suivant la demande du client.</p>
      </div>

      <SliderServices collectionTarget="miel-carrousel" />
      <div className="chambre my-2 bg-dark text-white text-center">
        Honey Moon
        <p>Le prix de la prestation varie suivant la demande du client.</p>
      </div>
    </div>
  </div>
);

export default Services;
