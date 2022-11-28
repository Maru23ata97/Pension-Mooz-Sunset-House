import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderActivites from '../components/SliderActivites';
const Activites = () => (
  <div className="bg-Activites">
    <Navbar />
    <p className="activites my-2 bg-dark text-white text-center mb-5">
      Nos activités
    </p>
    <div className="container mt-5">
      <SliderActivites collectionTarget="jetski-carrousel" />

      <div className="activites my-2 bg-dark text-white text-center mb-5">
        Jet-Ski
        <p>
          Afin de parcourir les différentes baies de l'îles et de naviguer sur
          le bleu turquois de Eimeo , nous mettons en location les jet-ski{' '}
          <br />
          Durée : 5 heures <br />
          Prix : 13500 XPF <br />
          Note: Le tour en jet-ski se fait avec un de nos guides
        </p>
      </div>

      <SliderActivites collectionTarget="kayak-carrousel" />
      <div className="activites my-2 bg-dark text-white text-center mb-5">
        Nos Kayak
        <p>
          Descrption : <br />
          Durée : Une demi-journée
          <br />
          Prix : 3000 XPF <br />
        </p>
      </div>

      <SliderActivites collectionTarget="paddle-carrousel" />
      <div className="activites my-2 bg-dark text-white text-center">
        Nos Paddle
        <p>
          Descrption :<br />
          Durée : Une demi-joournée <br />
          Prix : 5000 XPF <br />
        </p>
      </div>
    </div>
  </div>
);

export default Activites;
