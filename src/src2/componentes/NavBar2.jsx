import React from 'react'

const NavBar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/nosotros">
            <img src="img/img-final/logo-navbar.png" alt="logo" height="60px" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link hover" aria-current="page" href="index.html">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonios</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">Preguntas más frecuentes</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">contacto</a>
              </li>
            </ul>
            <button type="button" className="rounded-pill btn-rounded">
              +1 728365413
              <span>
                {/* <i className="fas fa-phone-alt"></i> */}
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar2