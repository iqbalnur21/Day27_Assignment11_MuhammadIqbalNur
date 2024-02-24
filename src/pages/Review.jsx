import React from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";

const Review = () => {
  return (
    <main>
      <Navbar />
      <div
        style={{
          overflowY: "scroll",
          height: "100vh",
          paddingBottom: "100px",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <div className="container my-3 br-3 p-3 rounded">
          <div className="text-white border-start border-5 border-danger fs-5 p-1 mb-3">
            Review
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col d-flex justify-content-center">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      src="http://pagisore.id/food/Kerang.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body-right">
                      <p className="card-text">
                        <b>Title: </b>Kerang
                      </p>
                      <p className="card-text">
                        <b>Rating: </b>8.6 / 10
                      </p>
                      <p className="card-text">
                        <b>Description: </b>This dish where clams are cooked
                        with a spicy sauce originating from Padang, Indonesia.
                        It's known for its spicy and flavorful taste.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      src="http://pagisore.id/food/Ikan-Kembung.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body-right">
                      <p className="card-text">
                        <b>Title: </b>Ikan Kembung
                      </p>
                      <p className="card-text">
                        <b>Rating: </b>7.9 / 10
                      </p>
                      <p className="card-text">
                        <b>Description: </b>This dish is a common fish in
                        Indonesia. It's used in various dishes, like grilling,
                        frying, or in soups. People often enjoy it in their
                        everyday meals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      src="http://pagisore.id/food/Balado-Ikan.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body-right">
                      <p className="card-text">
                        <b>Title: </b>Balado Ikan
                      </p>
                      <p className="card-text">
                        <b>Rating: </b>10.0 / 10
                      </p>
                      <p className="card-text">
                        <b>Description: </b>
                        "Ikan kembung balado" is a spicy Indonesian fish dish.
                        It's mackerel cooked in a hot chili sauce. People love
                        it for its spicy kick!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      src="http://pagisore.id/food/Ayam-Pop.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body-right">
                      <p className="card-text">
                        <b>Title: </b>Ayam Pop
                      </p>
                      <p className="card-Rating">
                        <b>Rating: </b>8.0 / 10
                      </p>
                      <p className="card-text">
                        <b>Description: </b>"Ayam Pop" is a tasty Indonesian
                        chicken dish. It's chicken cooked with spices until
                        crispy. People enjoy its yummy flavor!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Review;
