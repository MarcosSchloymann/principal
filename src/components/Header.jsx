import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-grey fixed-top">
  <a className="navbar-brand d-flex flex-row logo" href="#">
    <span className='get'><h2>Get&nbsp;</h2></span>
    
    <p className='it'><h2>!t</h2></p>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink as={Link} to='/' className="nav-link">Inicio</NavLink>
      </li>
      <li className="nav-item">
      <NavLink as={Link} to='/nosotros' className="nav-link">Nosotros</NavLink>
      </li>
      <li className="nav-item">
      <NavLink as={Link} to='/appmobil' className="nav-link">App moviles</NavLink>
      </li>
      <li className="nav-item">
      <NavLink as={Link} to='/paginasweb' className="nav-link">Paginas Web</NavLink>
      </li>
      <li className="nav-item">
      <NavLink as={Link} to='/diseno' className="nav-link">Diseños</NavLink>
      </li>
      <li className="nav-item">
      <NavLink as={Link} to='/manejoredes' className="nav-link">Manejo de Redes</NavLink>
      </li>
      <li className="nav-item">
      <NavLink as={Link} to='/contacto' className="nav-link">Contacto</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Header