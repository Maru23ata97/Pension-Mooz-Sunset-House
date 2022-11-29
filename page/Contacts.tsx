import * as React from 'react';
import Navbar from '../components/Navbar';

const Contacts = () =>
<div> 
  <Navbar />;
  <section id="contact">
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw-bold text-center">Nous contacter</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form action="">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"
                  >Nom, Prénom</label
                >
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"
                  >Adresse mail</label
                >
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"
                  >Votre message</label
                >
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-danger">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
</div>

export default Contacts;
