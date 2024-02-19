import React from 'react'

const Section1 = () => {
  return (
    <section id="home" className="intro-section">
  <div className="container">
    <div className="row align-items-center text-white">
      {/* <!-- START THE CONTENT FOR THE INTRO  --> */}
      <div className="col-lg-6 col-md-12 intros text-center">
        <img src="img/img-final/logo-header.png" alt="
        get-it" height="300"/>
        <h1 className="display-2">
          
          <span className="display-2--description lh-base">
            Somos un equipo que se dedica a mejorar y 
            <br />
            materializar proyectos a través de 
            <br />
            Diseño Web, Tiendas Online, Banding,
            <br />
            Social Media, Email Marketing y Diseño Gráfico.
          </span>
          <h3 className=''>
            ¡Somos lo que necesitas!
          </h3>
        </h1>
        {/* <button type="button" className="rounded-pill btn-rounded">Get in Touch
          <span><i className="fas fa-arrow-right"></i></span>
        </button> */}
      </div>
      {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
      <div className="col-md-6 intros text-end">
        <div className="video-box">
          <img src="img/img-final/img-header.png" alt="get-it" className="img-fluid"/>
          {/* <a href="/noottro" className="glightbox position-absolute top-50 start-50 translate-middle">
            <span>
              <i className="fas fa-play-circle"></i>
            </span>
            <span className="border-animation border-animation--border-1"></span>
            <span className="border-animation border-animation--border-2"></span>
          </a> */}
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" className='svg1' viewBox="0 0 1440 320"><path fill="#DA952E" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,160C840,117,960,75,1080,80C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
 
  <svg xmlns="http://www.w3.org/2000/svg" className='svg2' viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,160C840,117,960,75,1080,80C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  </section>
  )
}

export default Section1