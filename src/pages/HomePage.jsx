import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FuturistCard from '../components/FuturistCard'

const HomePage = () => {
  return (
    <>
    <div className="position-relative bg-dark">
        <div className="row align-items-center py-8 presentacion">
          <div className="col-md-5 col-lg-6 text-center text-md-center ilustracion">
            <h1 className='get'>get <span className='it'>!t</span></h1>
            <div className='subtitulo'>
            <p className='mt-0 mb-0'>estudio</p>
            <p className='get mt-0 mb-0'>creativo</p>
            </div>
          </div>
          <div className="col-md-7 col-lg-6 text-center text-md-center d-sm-none d-md-block">
            <img src="" alt="Logo" height="" width="" />
          </div>
        </div>
      </div>
    <div className="bg-dark">
        <div className="row align-items-center py-8">
          <div className="col-md-6 col-lg-3 text-center text-md-end futurec">
            <FuturistCard
            name="Paginas Web"
            addres=''
            />
            </div>
          <div className="col-md-6 col-lg-3 text-center text-md-start futurec">
           
           <FuturistCard
           name="Aplicaciones Moviles"
           addres=''
           />
            
          </div>
          <div className="col-md-6 col-lg-3 text-center text-md-start futurec">
           
           <FuturistCard
           name="Diseño"
           addres=''
           />
            
          </div>
          <div className="col-md-6 col-lg-3 text-center text-md-start futurec">
           
           <FuturistCard
           name="Manejo de Redes"
           addres=''
           />
            
          </div>
        </div>
      </div>
      
      {/* <div className="container position-relative">
        <div className="row align-items-center py-8">
          <div className="col-md-5 col-lg-6 order-md-1 text-center text-md-end"><img className="img-fluid" src="./img/mobile.png" width="350" alt="AppMovil" /></div>
          <div className="col-md-7 col-lg-6 text-center text-md-start">
            <h1 className="mb-4 display-3 fw-bold lh-sm textoApp">Aplicaiones móviles <br className="d-block d-lg-none d-xl-block" /> para tu estilo de vida moderno.</h1>
            <p className="textoAppDescP mt-3 mb-4">
              Aumente la productividad con una sencilla aplicación de tareas pendientes. Aplicación para
              <br className="d-none d-lg-block" />
              gestionar tus presupuestos personales.
            </p>
            <NavLink as={Link} to='/appmobil' className="btn btn-link ps-md-4" role="button">
              Ver más
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container position-relative">
        <div className="row align-items-center py-8">
          <div className="col-md-5 col-lg-6 text-center text-md-start">
            <img className="img-fluid" src="./img/mobile.png" width="350" alt="AppMovil" />
          </div>
          <div className="col-md-7 col-lg-6 text-center text-md-end">
            <h1 className="mb-4 display-3 fw-bold lh-sm textoApp">Páginas web <br className="d-block d-lg-none d-xl-block" />para mejorar tus negocios y emprendimientos.</h1>
            <p className="textoAppDescP mt-3 mb-4">
              Mejore la organzación y performance
              <br className="d-none d-lg-block" />
              de sus emprendimientos.
            </p>
            <NavLink as={Link} to='/paginasweb' className="btn btn-link ps-md-4" role="button">
              Ver Más
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container position-relative">
        <div className="row align-items-center py-8">
          <div className="col-md-5 col-lg-6 order-md-1 text-center text-md-end"><img className="img-fluid" src="./img/mobile.png" width="350" alt="AppMovil" /></div>
          <div className="col-md-7 col-lg-6 text-center text-md-start">
            <h1 className="mb-4 display-3 fw-bold lh-sm textoApp">Diseños <br className="d-block d-lg-none d-xl-block" />para mejor marketing y publicidad.</h1>
            <p className="textoAppDescP mt-3 mb-4">
              Diseños en cartelerías, páginas web,
              <br className="d-none d-lg-block" />
              aplicaciones móviles, identidades y publicidades
            </p>
            <NavLink as={Link} to='/diseno' className="btn btn-link ps-md-4" role="button">
              Ver Más
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container position-relative">
        <div className="row align-items-center py-8">
          <div className="col-md-5 col-lg-6 text-center text-md-start"><img className="img-fluid" src="./img/mobile.png" width="350" alt="AppMovil" /></div>
          <div className="col-md-7 col-lg-6 text-center text-md-end">
            <h1 className="mb-4 display-3 fw-bold lh-sm textoApp">Manejo de Redes <br className="d-block d-lg-none d-xl-block" />Sociales, laborales, de ventas.</h1>
            <p className="textoAppDescP mt-3 mb-4">
              Mejore la llegada a potenciales clientes
              <br className="d-none d-lg-block" />
              la estética y reputación de sus proyectos.
            </p>
            <NavLink as={Link} to='manejoredes' className="btn btn-link ps-md-4" role="button">
              Ver Más
            </NavLink>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default HomePage