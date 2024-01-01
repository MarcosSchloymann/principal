import React from 'react'

const Section2 = ({scrollPosition}) => {

  

  return (
    <section id="campanies" className="campanies">
    <div className="container">
      <div className="row text-center">
        <h4 
        className={"fw-bold lead mb-3 animate__animated animate__jackInTheBox" 
        + `${scrollPosition<550?'animate__jackInTheBox':''}`
        }>Contamos con la confianza de las siguientes compañías</h4>
        <div className="heading-line mb-5"></div>
      </div>
    </div>
    {/* <!-- START THE CAMPANIES CONTENT  --> */}
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="./img/campany-1.png" alt="Campany 1 logo" title="Campany 1 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="./img/campany-2.png" alt="Campany 2 logo" title="Campany 2 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="./img/campany-3.png" alt="Campany 3 logo" title="Campany 3 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="./img/campany-4.png" alt="Campany 4 logo" title="Campany 4 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="./img/campany-5.png" alt="Campany 5 logo" title="Campany 5 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="./img/campany-6.png" alt="Campany 6 logo" title="Campany 6 Logo" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2