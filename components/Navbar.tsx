import * as React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-light ">
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
            <a className="nav-link" href="/contacts">
              Nous contacter
            </a>
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
                <a className="dropdown-item" href="/chambres">
                  Nos chambres
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/restaurant">
                  Notre Restaurant
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/activites">
                  Nos Activités
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/services">
                  Nos Services
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/location">
                  Nos Locations
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Commentaires
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled"></a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
