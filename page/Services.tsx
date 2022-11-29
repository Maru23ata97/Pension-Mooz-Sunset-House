import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderServices from '../components/SliderServices';
const Services = () => (
  <div className="bg-Services">
    <Navbar />
    <h3 className="text-center">
      Nos services évènementiels <br />{' '}
    </h3>
    <hr />
    <hr />
    <p className="text-start">
      Veuillez vous rapprocher de notre réception pour toutes autres
      informations.
    </p>
    <hr />
    <hr />
    <div className="container mt-5">
      <SliderServices collectionTarget="mariage-carrousel" />

      <div className="chambre my-2  text-dark text-center mb-5">
        <h3 className="text-center fw-light">Décoration du site pour un mariage</h3>
        <p>Le prix de la prestation varie suivant la demande du client.</p>
      </div>
      <hr />
      <hr />
      <SliderServices collectionTarget="bh-carrousel" />
      <div className="chambre my-2 bg text-dark text-center mb-5">
        <h3 className="text-center text-dark fw-light">Décoration du site pour un anniverssaire</h3>
        <p>Le prix de la prestation varie suivant la demande du client.</p>
      </div>
      <hr />
      <hr />

      <SliderServices collectionTarget="miel-carrousel" />
      <div className="chambre my-2 text-dark text-center">
        <h3 className="text-center text-dark fw-light">Honey Moon</h3>
        <p>Le prix de la prestation varie suivant la demande du client.</p>
        <hr/>
        <hr/>
      </div>
    </div>
  </div>
);

export default Services;
