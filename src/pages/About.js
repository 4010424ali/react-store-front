import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center highlight-blue"
          id="About"
          style={{
            height: '500px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <div className="container">
            <div className="intro">
              <h2
                className="text-center bounce animated"
                style={{ color: '#172f76' }}
              >
                ABOUT
              </h2>
              <hr
                style={{
                  height: '2px',
                  color: '#214a80',
                  backgroundColor: '#172f76',
                }}
              />
              <p
                className="text-center bounce animated"
                style={{ color: '#172f76', fontFamily: 'Muli, sans-serif' }}
              >
                The passing away of a loved one is undeniably painful and it is
                particularly more stressful when you are faced with the task of
                gathering their assets or administering their Estate.
                <br />
                <br />
                Nisel Probate is pleased to take on the responsibility of
                processing probate documents on your behalf and we are here to
                take the burden off you from start to finish.
              </p>
            </div>
            <div className="buttons">
              <Link
                className="btn text-capitalize bounce animated"
                role="button"
                to="#"
                style={{
                  backgroundColor: '#ffb200',
                  color: '#ffffff',
                  fontFamily: 'Muli, sans-serif',
                  fontWeight: 300,
                  fontSize: '15px',
                }}
              >
                Our Team
                <br />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <section className="card-section-imagia">
                  <h1>Our team</h1>
                  <h2>Posset maiora firmatum nunc cuniculis</h2>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <div className="card-container-imagia">
                          <div className="card-imagia">
                            <div className="front-imagia">
                              <div className="cover-imagia">
                                <img
                                  alt=""
                                  src="https://unsplash.it/720/500?image=1067"
                                />
                              </div>
                              <div className="user-imagia">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="https://unsplash.it/120/120?image=64"
                                />
                              </div>
                              <div className="content-imagia">
                                <h3 className="name-imagia">John Doe</h3>
                                <p className="subtitle-imagia">Subtitle</p>
                                <p className="text-center">
                                  <em>
                                    Tantum autem cuique tribuendum, primum
                                    quantum ipse efficere possis, deinde etiam
                                    quantum ille quem diligas atque adiuves.
                                  </em>
                                </p>
                              </div>
                              <div className="footer-imagia">
                                <span>
                                  <i className="fa fa-plus" /> More info
                                </span>
                              </div>
                            </div>
                            <div className="back-imagia">
                              <div className="content-imagia content-back-imagia">
                                <div>
                                  <h3 className="text-center">Lorem Ipsum</h3>
                                  <p className="text-center">
                                    Et hanc quidem praeter oppida multa duae
                                    civitates exornant Seleucia opus Seleuci
                                    regis, et Claudiopolis quam deduxit coloniam
                                    Claudius Caesar. Isaura enim antehac nimium
                                    potens, olim subversa ut rebellatrix
                                    interneciva aegre vestigia claritudinis
                                    pristinae monstrat admodum pauca.
                                  </p>
                                </div>
                              </div>
                              <div className="footer-imagia">
                                <div className="social-imagia text-center">
                                  <Link to="#">
                                    <i className="fa fa-facebook" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="card-container-imagia">
                          <div className="card-imagia">
                            <div className="front-imagia">
                              <div className="cover-imagia cover-gradient" />
                              <div className="user-imagia">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="https://unsplash.it/120/120?image=64"
                                />
                              </div>
                              <div className="content-imagia">
                                <h3 className="name-imagia">John Doe</h3>
                                <p className="subtitle-imagia">Subtitle</p>
                                <p className="text-center">
                                  <em>
                                    Tantum autem cuique tribuendum, primum
                                    quantum ipse efficere possis, deinde etiam
                                    quantum ille quem diligas atque adiuves.
                                  </em>
                                </p>
                              </div>
                              <div className="footer-imagia">
                                <span>
                                  <i className="fa fa-plus" /> More info
                                </span>
                              </div>
                            </div>
                            <div className="back-imagia">
                              <div className="content-imagia content-back-imagia">
                                <div>
                                  <h3 className="text-center">Lorem Ipsum</h3>
                                  <p className="text-center">
                                    Et hanc quidem praeter oppida multa duae
                                    civitates exornant Seleucia opus Seleuci
                                    regis, et Claudiopolis quam deduxit coloniam
                                    Claudius Caesar. Isaura enim antehac nimium
                                    potens, olim subversa ut rebellatrix
                                    interneciva aegre vestigia claritudinis
                                    pristinae monstrat admodum pauca.
                                  </p>
                                </div>
                              </div>
                              <div className="footer-imagia">
                                <div className="social-imagia text-center">
                                  <Link to="#">
                                    <i className="fa fa-facebook" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="card-container-imagia">
                          <div className="card-imagia">
                            <div className="front-imagia">
                              <div className="cover-imagia">
                                <img
                                  alt=""
                                  src="https://unsplash.it/720/500?image=1067"
                                />
                              </div>
                              <div className="user-imagia">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="https://unsplash.it/120/120?image=64"
                                />
                              </div>
                              <div className="content-imagia">
                                <h3 className="name-imagia">John Doe</h3>
                                <p className="subtitle-imagia">Subtitle</p>
                                <p className="text-center">
                                  <em>
                                    Tantum autem cuique tribuendum, primum
                                    quantum ipse efficere possis, deinde etiam
                                    quantum ille quem diligas atque adiuves.
                                  </em>
                                </p>
                              </div>
                              <div className="footer-imagia">
                                <span>
                                  <i className="fa fa-plus" /> More info
                                </span>
                              </div>
                            </div>
                            <div className="back-imagia">
                              <div className="content-imagia content-back-imagia">
                                <div>
                                  <h3 className="text-center">Lorem Ipsum</h3>
                                  <p className="text-center">
                                    Et hanc quidem praeter oppida multa duae
                                    civitates exornant Seleucia opus Seleuci
                                    regis, et Claudiopolis quam deduxit coloniam
                                    Claudius Caesar. Isaura enim antehac nimium
                                    potens, olim subversa ut rebellatrix
                                    interneciva aegre vestigia claritudinis
                                    pristinae monstrat admodum pauca.
                                  </p>
                                </div>
                              </div>
                              <div className="footer-imagia">
                                <div className="social-imagia text-center">
                                  <Link to="#">
                                    <i className="fa fa-facebook" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
