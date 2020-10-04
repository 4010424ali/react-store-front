import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const FAQ = () => {
  return (
    <>
      <Navbar />
      <section className="faq">
        <div className="container">
          <div className="faq-flex">
            <h1>FAQ</h1>
            <p>
              <Link className="text-white-50" to="/">
                Home
              </Link>{' '}
              / FAQ
            </p>
          </div>
        </div>
      </section>

      <section className="faq-q pt-5 ob-5">
        <div className="container">
          <h1 className="h1">GOT A QUESTION ?</h1>
          <h1 className="faq-text">
            Get your answer here! Are you curious about getting to know about
            Olai? Feel free to ask us anything about Olai and it’s products.
          </h1>
          <div className="row mt-3">
            <div className="col-md-6">
              <h5 className="text-bold">Is Olai’s jaggery unadulterated?</h5>
              <p className="text-muted">
                Yes, Olai tends to provide a best alternative as unadulterated
                quality palm jaggery for refined white sugar to their beloved
                customers and make sure it’s quality.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-bold">
                Can you deliver to abroad countries?
              </h5>
              <p className="text-muted">
                Yes, Olai exports all products including edible palm jaggery aka
                Karuppaddy to other countries like USA, Canada & Uk. And tries
                to expand to other countries as well.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-bold">
                Are Olai's products truly made out with palm leaves and
                environment friendly?
              </h5>
              <p className="text-muted">
                Olai makes sure it’s all the products 100% Natural,
                Biodegradable, Eco friendly.There are no coatings, wax or
                chemicals added on the surface of the plate
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-bold">
                Can we customise our orders of some products?
              </h5>
              <p className="text-muted">
                we give the top priority to the customer’s desire so you can
                customise your orders according to your preferences.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-bold">
                Do you provide only handicrafts or any other edible products?
              </h5>
              <p className="text-muted">
                Yes, we do sell both handicrafts items and edible things like
                palm jaggery, palmyrah sprout, sprout chips and palmyrah sugar.
                But for the time being we would not guarantee that it’s
                available all the time as it’s seasonal but we are trying our
                best to keep it for all the time with a proper plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
