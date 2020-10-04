import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h2 className="footer-text text-center text-warning">About</h2>
            <p className="text-center text-dark">
              Olai is a business for palmyra products. We design and produce
              alternatives to replace your daily life things with palmyra
              products. You can purchase our products with good quality.
            </p>
          </div>
          <div className="col-md-4 mb-5">
            <h2 className="footer-text text-center text-warning">
              Privacy Policy
            </h2>
            <p className="text-center text-dark mb-5">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{' '}
              <Link to="/privacypolicy" className="text-warning">
                Privacy Policy{' '}
              </Link>{' '}
            </p>
          </div>
          <div className="col-md-4 mb-5">
            <h2 className="footer-text text-center text-warning">Contact Us</h2>
            <p className="text-center text-dark">
              <i className="fas fa-mobile-alt"></i> +94 76 316 7846
            </p>
            <p className="text-center text-dark">
              <i className="fas fa-at"></i> hello@olai.shop
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
