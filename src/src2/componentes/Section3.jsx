import React from 'react'

const Section3 = ({scrollPosition}) => {
  return (
    <section id="services" className="services">
  <div className="container">
    <div className="row text-center">
      <h1 className={"display-3 fw-bold Rigth animate__animated animate__jackInTheBox"
    + `${scrollPosition<850?'animate__jackInTheBox':''}`
    }>Nuestros Servicios</h1>
      <div className="heading-line mb-1"></div>
    </div>
  {/* <!-- START THE DESCRIPTION CONTENT  --> */}
    <div className="row pt-2 pb-2 mt-0 mb-3">
      <div className={"col-md-6 border-right animate__animated animate__bounceInDown"
    +`${scrollPosition<1000?'animate__bounceInDown':''}`
    }>
        <div className="bg-white p-3">
          <h2 className="fw-bold text-capitalize text-center">
          Nuestros servicios van desde el diseño inicial hasta la implementación en cualquier lugar y en cualquier momento.
          </h2>
        </div>
      </div>
      <div className={"col-md-6 animate__animated animate__bounceInDown" 
    +`${scrollPosition<1000?'animate__bounceInDown':''}`
    }>
        <div className="bg-white p-4 text-start">
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur architecto magni, 
            dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. 
            Tempore ducimus molestiae in dolore enim.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- START THE CONTENT FOR THE SERVICES  --> */}
  <div className="container">
    {/* <!-- START THE MARKETING CONTENT  --> */}
    <div className="row">
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 animate__animated animate__bounceInUp"
    +`${scrollPosition<1250?'animate__bounceInUp':''}`
    }>
        <div className="services__content">
          <div className="icon d-block fas fa-paper-plane"></div>
          <h3 className="display-3--title mt-1">Marketing</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Ver más
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end animate__animated animate__bounceInUp"
     +`${scrollPosition<1250?'animate__bounceInUp':''}`
    }>
        <div className="services__pic">
          <img src="./img/service-1.png" alt="marketing illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
    {/* <!-- START THE WEB DEVELOPMENT CONTENT  --> */}
    <div className="row">
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start animate__animated animate__bounceInDown"
    +`${scrollPosition<1900?'animate__bounceInDown':''}`
    }>
        <div className="services__pic">
          <img src="./img/service-2.png" alt="web development illustration" className="img-fluid"/>
        </div>
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 animate__animated animate__bounceInDown"
    +`${scrollPosition<1900?'animate__bounceInDown':''}`
    }>
        <div className="services__content">
          <div className="icon d-block fas fa-code"></div>
          <h3 className="display-3--title mt-1">Páginas web</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Ver más
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
    </div>
    {/* <!-- START THE CLOUD HOSTING CONTENT  --> */}
    <div className="row">
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 animate__animated animate__bounceInUp"
      +`${scrollPosition<2450?'animate__bounceInUp':''}`
    }>
        <div className="services__content">
          <div className="icon d-block fas fa-cloud-upload-alt"></div>
          <h3 className="display-3--title mt-1">Manejo de nube</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Ver más
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end animate__animated animate__bounceInUp"
       +`${scrollPosition<2450?'animate__bounceInUp':''}`
    }>
        <div className="services__pic">
          <img src="./img/service-3.png" alt="cloud hosting illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Section3