import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <section className="faq">
        <div className="container">
          <div className="faq-flex">
            <h1>Privacy Policy</h1>
            <p>
              <Link className="text-white-50" to="/">
                Home
              </Link>{' '}
              / Privacy Policy
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4 mb-5">
          <h1>Who we are</h1>
          <p>
            Olai.shop is a social enterprise that intends to provide
            alternatives to housewares commonly made from plastic & polythenes
            with eco-friendly materials made out of local palmyra leaves.
            Olai.shop offers trivates, table mats, coasters, hand bags, trays,
            baskets, and other products.{' '}
          </p>
          <p>
            All products are designed and handmade by local artisans in northern
            Sri Lanka. Olai.shop also supplies edible items like Palm Jaggery
            (Panangkaddy Kuddan), Palmyrah Sprouts (Pulukodial), Odiyal Chips,
            and Palm Sugar made from the palmyrah tree.
          </p>
          <h1>1. GENERAL PRINCIPLES</h1>
          <p>
            Protecting your privacy is very important to us. We have accordingly
            developed this Privacy Policy to protect your personal information
            and keep it confidential. We do everything we reasonably can to
            protect your rights of privacy on systems and the Website controlled
            by us, but we are not liable for any unauthorized or unlawful
            disclosures of your personal and confidential information made by
            third parties who are not subject to our control, for example
            advertisers and websites that have links to our Website. You should
            take note that the information and privacy practices of our business
            partners, advertisers, sponsors or other sites to which we provide
            hyperlinks, may be different from ours. Our privacy policy is
            subject to change at any time without notice. To make sure you are
            aware of any changes, please review this policy periodically.
          </p>
          <h1>(A)</h1>
          <p>
            Profiling Information: Information which you provide when you
            register for making a purchase, which may include some or all of the
            following: – Information about your personal identity such as
            gender, marital status, age, preferences, likes and dislikes etc.;
            and – Your contact details such as your physical addresses, postal
            addresses, telephone numbers and the like. – In the case of Facebook
            aligned services (if so opted by you), publicly available
            information of your friends, their likes and dislikes, etc.
          </p>
          <h1>(B)</h1>
          <p>
            Payment and Account Information: Your account history with us
            including (without limitation) all billing information and
            communications, payment history etc
          </p>
          <h1>(C)</h1>
          <p>
            Service Usage: Information about your navigation using our Services,
            for example the URLs of websites, which you visit and from which you
            request downloads.
          </p>
          <h1>(D)</h1>
          <p>
            Log information:Information such as your web request, IP address,
            browser type, browser language. User IDs: Your usernames, passwords,
            email addresses and other security-related information used by you
            in relation to our Services.
          </p>

          <h1>2. RIGHT TO COLLECT</h1>
          <p>
            By accepting the Terms of Service you agree that we may collect and
            store your Personal Information as long as you use our Services
            subject to the limitations set out in this Privacy Policy.
          </p>
          <p>
            {' '}
            We collect your Profiling and Account Information for the following
            reasons:
          </p>
          <h1>2.1</h1>
          <p>
            (a) We need your identity details, contact details, banking
            information and account history to manage our relationship with you
            and provide Services to you. We may use this information for
            suggesting products and promotional offers and schemes. We will only
            disclose this information as provided below.
          </p>
          <p>
            (b) We use certain of your information in an aggregated form to
            compile statistical and demographic profiles for our business and
            marketing activities. We may disclose such information about you,
            provided that the information is in an aggregated form that is not
            capable of being used or interpreted in such a manner as to identify
            you.
          </p>
          <h1>3. GENERAL EXCEPTIONS</h1>
          <p>
            To ensure that the security and integrity of our Services are
            safeguarded, we may monitor your Personal Information. This
            monitoring may include (without limitation) the filtering of
            incoming and outgoing electronic data messages to identify, limit
            and/or prevent the transmission of spam, viruses and/or unlawful,
            defamatory, obscene or otherwise undesirable material or content. We
            may under certain circumstances procure an element of the Services
            from a third party service provider. To the extent that it may be
            necessary, and solely for the purposes of providing the Service to
            you, you agree that we may disclose to such third party any of your
            Personal Information that may be necessary for the procurement of
            services from the third party.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
