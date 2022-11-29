import * as React from 'react';
import Navbar from '../components/Navbar';
import SliderActivites from '../components/SliderActivites';
const Activites = () => (
  <div className="bg-Activites">
    <Navbar />
    <h3 className="activites my-2 text-center mb-5">
      <hr/>
      <hr/>
      Nos activités
      <hr/>
      <hr/>
    </h3>
    <div className="container mt-5">
      <h4 className="text-center">Jet-Ski</h4>
      <SliderActivites collectionTarget="jetski-carrousel" />

      <div className="activites my-2  text-start mb-5">
        <p>
          Afin de parcourir les différentes baies de l'îles et de naviguer sur
          le bleu turquois de Eimeo , nous mettons en location les jet-ski{' '}
          <br />
          <br/>
          Durée : 5 heures <br />
          Prix : 13500 XPF <br />
          Note: Le tour en jet-ski se fait avec un de nos guides
        </p>
      </div>
      <hr/>
      <hr/>

      <h3 className="text-center">Nos Kayak</h3>
      <SliderActivites collectionTarget="kayak-carrousel" />
      <div className="activites my-2  text-center mb-5">
        <p className="text-start">
          Descrption : <br />
          Durée : Une demi-journée
          <br />
          Prix : 3000 XPF <br />
        </p>
      </div>
<hr/>
<hr/>
<h3 className="text-center"> Nos Paddle</h3>
      <SliderActivites collectionTarget="paddle-carrousel" />
      <div className="activites my-2  text-center">
        <p className="text-start">
          Descrption :<br />
          Durée : Une demi-joournée <br />
          Prix : 5000 XPF <br />
        </p>
      </div>
      <hr/>
      <hr/>
    </div>
  </div>
);

export default Activites;
