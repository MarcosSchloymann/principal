import React from 'react'

const Section7 = ({scrollPosition}) => {
  return (
    <section id="contact" className="get-started">
  <div className="container">
    <div className="row text-center">
      <h1 className={"display-3 fw-bold text-capitalize animate__animated animate__jackInTheBox"
       + `${scrollPosition<6200?'animate__jackInTheBox':''}`
    }>Get started</h1>
      <div className="heading-line"></div>
      <p className="lh-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum architecto modi.
      </p>
    </div>

    {/* <!-- START THE CTA CONTENT  --> */}
    <div className="row text-white">
      <div className="col-12 col-lg-6 gradient shadow p-3">
        <div className="cta-info w-100">
          <h4 className="display-4 fw-bold">100% Satisfacción garantizada</h4>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio minima, tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!
          </p>
          <h3 className="display-3--brief">Cuál es el próximo paso?</h3>
          <ul className="cta-info__list">
            <li>Preparamos la propuesta.</li>
            <li>La debatiremos juntos</li>
            <li>Comencemos!</li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-lg-6 bg-white shadow p-3">
        <div className="form w-100 pb-2">
          <h4 className="display-3--title mb-5">Empieza tu proyecto</h4>
          <form action="#" className="row">
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="Nombre" id="inputFirstName" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="Apellido" id="inputLastName" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-12 mb-3">
              <input type="email" placeholder="email" id="inputEmail" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-12 mb-3">
              <textarea name="mensaje" placeholder="mensaje" id="message" rows="8" className="shadow form-control form-control-lg"></textarea>
            </div>
            <div className="text-center d-grid mt-1">
              <button type="button" className="btn btn-primary rounded-pill pt-3 pb-3">
                Enviar
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Section7