import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-light text-dark ">
    <div className="container-fluid">
      <a className="navbar-brand " href="#">
        Mooz Sunset House
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Nous contacter
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/chambres">
                  Nos chambres
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/restaurant">
                  Notre Restaurant
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/activites">
                  Nos Activités
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/services">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/location">
                  Nos Locations
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Commentaires
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
