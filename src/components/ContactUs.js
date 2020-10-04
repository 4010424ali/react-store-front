import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Map from './google/Map';

const ContactUs = () => {
  // Set states for process form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  // Submit the message
  const submitMessage = async (e) => {
    e.preventDefault();
    try {
      // Post message to server
      await axios.post('/api/v1/message', { name, email, subject, message });
      // empty the sate
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="text-center mb-lg-5">
          <h1>Contact Us</h1>
          <p>
            We will answer any questions you may have about our online sales,
            rights or partnership service right here.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form>
              {/* Message form */}
              <div className="form-group">
                <label htmlFor="name">Your Name (Require)</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your name with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email Address (Require)</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Your Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label htmlfor="message">Your Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                // Submit the form
                onClick={submitMessage}
                type="submit"
                className="btn btn-outline-warning btn-block"
              >
                {' '}
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6 text-dark">
            <h1>INFORMATION ABOUT US</h1>
            <p>
              Olai.shop is a social enterprise that intends to provide
              alternatives to housewares commonly made from plastic & polythenes
              with eco-friendly materials made out of local palmyra leaves.{' '}
            </p>
            <p>
              Olai.shop offers trivates, table mats, coasters, hand bags, trays,
              baskets, and other products.
            </p>
            <br />
            <br />
            <p>
              All products are designed and handmade by local artisans in
              northern Sri Lanka. Olai.shop also supplies edible items like Palm
              Jaggery (Panangkaddy Kuddan), Palmyrah Sprouts (Pulukodial),
              Odiyal Chips, and Palm Sugar made from the palmyrah tree.
            </p>
          </div>
        </div>
        <div className="container py-lg-5">
          <div className="row">
            <div className="col">
              {/* Show Map */}
              <Map />
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message is Submited, We connect soon by email
        </Alert>
      </Snackbar>
    </section>
  );
};

export default ContactUs;
