import React from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Menu = () => {
  return (
    <body>
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
              Popular
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Tumis-Buncis.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Tumis Buncis</h5>
                    <p className="card-text">7.9 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Tumis-Buncis.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Sup-Ayam.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Sup Ayam</h5>
                    <p className="card-text">9.0 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Sup-Ayam.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Opor-Ayam.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Opor Ayam</h5>
                    <p className="card-text">8.1 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Opor-Ayam.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Kerang.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Kerang</h5>
                    <p className="card-text">10 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Kerang.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Ikan-Kembung.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Ikan Kembung</h5>
                    <p className="card-text">8.6 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Ikan-Kembung.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-3 br-3 p-3 rounded">
            <div className="text-white border-start border-5 border-danger fs-5 p-1 mb-3">
              Feature
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Balado-Ikan.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Balado Ikan</h5>
                    <p className="card-text">7.9 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Balado-Ikan.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Ayam-Pop.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Ayam Pop</h5>
                    <p className="card-text">10 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Ayam-Pop.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Ayam-Panggang.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Ayam Panggang</h5>
                    <p className="card-text">8.0 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Ayam-Panggang.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Ayam-Goreng.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Ayam Goreng</h5>
                    <p className="card-text">8.5 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Ayam-Goreng.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-strech">
                <div className="card">
                  <img
                    src="http://pagisore.id/food/Udang-Tofu.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Udang Tofu</h5>
                    <p className="card-text">9.5 / 10</p>
                  </div>
                  <a
                    className="btn btn-danger m-1"
                    href="http://pagisore.id/food/Udang-Tofu.jpg"
                    target="_blank"
                  >
                    Image Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default Menu;
