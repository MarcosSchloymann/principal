import React from 'react'

const Section3 = () => {
  return (
    <section id="services" className="services">
  <div className="container">
    <div className="row text-center">
      {/* <h1 className={"display-3 fw-bold Rigth"
    }>Nuestros Servicios</h1> */}
      {/* <div className="heading-line mb-1"></div> */}
    </div>
  {/* <!-- START THE DESCRIPTION CONTENT  --> */}
    {/* <div className="row pt-2 pb-2 mt-0 mb-3">
      <div className={"col-md-6 border-right"}>
        <div className="bg-white p-3">
          <h2 className="fw-bold text-capitalize text-center">
          Nuestros servicios van desde el diseño inicial hasta la implementación en cualquier lugar y en cualquier momento.
          </h2>
        </div>
      </div>
      <div className={"col-md-6" 
    }>
        <div className="bg-white p-4 text-start">
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur architecto magni, 
            dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. 
            Tempore ducimus molestiae in dolore enim.
          </p>
        </div>
      </div>
    </div> */}
  </div>

  {/* <!-- START THE CONTENT FOR THE SERVICES  --> */}
  <div className="container">
    {/* <!-- START THE MARKETING CONTENT  --> */}
    <div className="row">
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
    }>
        <div className="services__content">
          {/* <div className="icon d-block fas fa-paper-plane"></div> */}
          <h3 className="display-3--title mt-1">Web / Hosting / Dominios
          <br />
          y Mantenimientos
          </h3>
          <p className="lh-lg">
            Nuestro equipo de profesionales se encuentra preparado
            <br />
            para poder concretar tus proyectos y mejorar el rendimiento
            <br />
            de tu empresa o emprendimiento.
            <br />
            Participamos en la creación de Sitios Web, Wordpress,
            <br />
            Portfolios, Catálogos, Blogs, etc.
            <br />
            Usamos tecnologías de desarrollo web adaptbles a todas
            <br />
            las resoluciones y dispositivos
          </p>
          {/* <button type="button" className="rounded-pill btn-rounded border-primary">Ver más
            <span><i className="fas fa-arrow-right"></i></span>
          </button> */}
        </div>
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
    }>
        <div className="services__pic">
          <img src="img/img-final/img-sec2.png" alt="marketing illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
    {/* <!-- START THE WEB DEVELOPMENT CONTENT  --> */}
    <div className="row">
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start"
    }>
        <div className="services__pic">
          <img src="img/img-final/2.png" alt="web development illustration" className="img-fluid"/>
        </div>
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
    }>
        <div className="services__content">
          {/* <div className="icon d-block fas fa-code"></div> */}
          <h3 className="display-3--title mt-1 text-end">Diseño / Branding / Identidad 
          <br />
          Social media
          </h3>
          <p className="lh-lg text-end">
            Contamos con un servicio que implementa estrategias
            digitales, creación de contenidos para redes 
            Diseñamos el logo con un manual de identidad 
            para poder posicionarlo en el mercado, a través de 
            <br />
            Mailingg, banners, newsletters.
          </p>
          {/* <button type="button" className="rounded-pill btn-rounded border-primary">Ver más
            <span><i className="fas fa-arrow-right"></i></span>
          </button> */}
        </div>
      </div>
    </div>
    {/* <!-- START THE CLOUD HOSTING CONTENT  --> */}
    <div className="row">
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
    }>
        <div className="services__content">
          {/* <div className="icon d-block fas fa-cloud-upload-alt"></div> */}
          <h3 className="display-3--title mt-1">Packaging / Folletería / Diseño 
          de cartelería o mural para tu local
          </h3>
          <p className="lh-lg">
            Estamos preparados para materializar tus proyectos, partimos 
            desde el envoltorio de tu producto, folletería de promoción 
            <br />
            o con brochures, hasta el diseño interior y exterior de tu local.
          </p>
          {/* <button type="button" className="rounded-pill btn-rounded border-primary">Ver más
            <span><i className="fas fa-arrow-right"></i></span>
          </button> */}
        </div>
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
    }>
        <div className="services__pic">
          <img src="img/img-final/23.png" alt="cloud hosting illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
    <div className="row">
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start"
    }>
        <div className="services__pic">
          <img src="img/img-final/56.png" alt="web development illustration" className="img-fluid"/>
        </div>
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
    }>
        <div className="services__content">
          {/* <div className="icon d-block fas fa-code"></div> */}
          <h3 className="display-3--title mt-1 text-end">Turneros Electrónicos Interactivos
          <br />
          Social media
          </h3>
          <p className="lh-lg text-end">
            Con el avance tecnológico buscamos soluciones creando turneros con novedosos diseños para agilizar y mejorar el servicio que se ofrece.
          </p>
          {/* <button type="button" className="rounded-pill btn-rounded border-primary">Ver más
            <span><i className="fas fa-arrow-right"></i></span>
          </button> */}
        </div>
      </div>
    </div>

  </div>
</section>
  )
}

export default Section3