import React from 'react'

const Section4 = () => {
  return (
    <section id="testimonials" className="testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="container">
        <div className="row text-center text-white">
          <h1 className="display-3 fw-bold">Testimonios</h1>
          <hr style={{ width: '100px', height: '3px' }} className="mx-auto" />
          <p className="lead pt-1">Lo que nuestros clientes opinan</p>
        </div>

        {/* <!-- START THE CAROUSEL CONTENT  --> */}
        <div className="row align-items-center">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* <!-- CAROUSEL ITEM 1 --> */}
              <div className="carousel-item active">
                {/* <!-- testimonials card  --> */}
                <div className="testimonials__card">
                  <p className="lh-lg">
                    <i className="fas fa-quote-left"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                    <i className="fas fa-quote-right"></i>
                    <div className="ratings p-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </p>
                </div>
                {/* <!-- client picture  --> */}
                <div className="testimonials__picture">
                  <img src="images/testimonials/client-1.jpg" alt="client-1" className="rounded-circle img-fluid" />
                </div>
                {/* <!-- client name & role  --> */}
                <div className="testimonials__name">
                  <h3>Manuel Velarde</h3>
                  <p className="fw-light">CEO & founder</p>
                </div>
              </div>
              {/* <!-- CAROUSEL ITEM 2 --> */}
              <div className="carousel-item">
                {/* <!-- testimonials card  --> */}
                <div className="testimonials__card">
                  <p className="lh-lg">
                    <i className="fas fa-quote-left"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                    <i className="fas fa-quote-right"></i>
                    <div className="ratings p-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </p>
                </div>
                {/* <!-- client picture  --> */}
                <div className="testimonials__picture">
                  <img src="images/testimonials/client-2.jpg" alt="client-2" className="rounded-circle img-fluid" />
                </div>
                {/* <!-- client name & role  --> */}
                <div className="testimonials__name">
                  <h3>Leticia Romero</h3>
                  <p className="fw-light">Finance Manager</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-light fas fa-long-arrow-alt-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              </button>
              <button className="btn btn-outline-light fas fa-long-arrow-alt-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  )
}

export default Section4