import React from 'react';

const PhotoSection = () => {
  return (
    <section className="photo-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="image-one text-center pt-4">
                  <div className="overlay">
                    <h1>Jaggery</h1>
                    <h4>EDIBLES ITEM</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="image-two text-center pt-4">
                  <div className="overlay">
                    <h1>Palm Leaf Tray</h1>
                    <h4>HANDICRAFT ITEM</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-three text-center my-auto pt-lg-4">
              <div className="overlay">
                <h1>Jaggery</h1>
                <h4>EDIBLES ITEM</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
