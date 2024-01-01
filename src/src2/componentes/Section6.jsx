import React from 'react'

const Section6 = ({scrollPosition}) => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="row text-center mt-5">
                    <h1 className={"display-3 fw-bold text-capitalize animate__animated animate__jackInTheBox"
                    + `${scrollPosition<4800?'animate__jackInTheBox':''}`
                }>Nustros últimos trabajos</h1>
                    <div className="heading-line"></div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.
                    </p>
                </div>
                {/* <!-- FILTER BUTTONS  --> */}
                <div className="row mt-5 mb-4 g-3 text-center">
                    <div className="col-md-12">
                        <button className="btn btn-outline-primary" type="button">Todo</button>
                        <button className="btn btn-outline-primary" type="button">Sitios web</button>
                        <button className="btn btn-outline-primary" type="button">Diseños</button>
                        <button className="btn btn-outline-primary" type="button">Bosquejos</button>
                    </div>
                </div>

                {/* <!-- START THE PORTFOLIO ITEMS  --> */}
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-1.jpg" alt="portfolio 1" title="portfolio 1" className="img-fluid" />
                            <div className="portfolio-info">
                                <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-2.jpg" alt="portfolio 2" title="portfolio 2" className="img-fluid" />
                            <div className="portfolio-info">
                                <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-3.jpg" alt="portfolio 3" title="portfolio 3" className="img-fluid" />
                            <div className="portfolio-info">
                                <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-4.jpg" alt="portfolio 4" title="portfolio 4" className="img-fluid" />
                            <div className="portfolio-info">
                                <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-5.jpg" alt="portfolio 5" title="portfolio 5" className="img-fluid" />
                            <div className="portfolio-info">
                                <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-6.jpg" alt="portfolio 6" title="portfolio 6" className="img-fluid"/>
                                <div className="portfolio-info">
                                    <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-7.jpg" alt="portfolio 7" title="portfolio 7" className="img-fluid"/>
                                <div className="portfolio-info">
                                    <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-8.jpg" alt="portfolio 8" title="portfolio 8" className="img-fluid"/>
                                <div className="portfolio-info">
                                    <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-box shadow">
                            <img src="./img/portfolio-9.jpg" alt="portfolio 9" title="portfolio 9" className="img-fluid"/>
                                <div className="portfolio-info">
                                    <div className="caption">
                                    <h4>Nombre Proyecto</h4>
                                    <p>categoria project</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section6