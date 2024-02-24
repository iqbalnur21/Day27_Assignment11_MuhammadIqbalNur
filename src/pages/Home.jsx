import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main>
      <Navbar />
      <div style={{ height: windowHeight }}>
        <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
          <div>
            <img
              style={{ height: windowHeight, objectFit: "contain" }}
              src="http://pagisore.id/food/Balado-Ikan.jpg"
              alt="Slide 1"
            />
            <div className="legend">
              <h3>Balado Ikan</h3>
              <p className="fs-5">
                "Balado ikan" is a delicious Indonesian dish made with fish
                cooked in a spicy chili sauce. The fish is typically fried until
                crispy and then mixed with a flavorful sauce made from chili
                peppers, garlic, shallots, tomatoes, and spices. It's a popular
                and flavorful dish enjoyed across Indonesia.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{ height: windowHeight, objectFit: "contain" }}
              src="http://pagisore.id/food/Ayam-Pop.jpg"
              alt="Slide 2"
            />
            <div className="legend">
              <h3>Ayam Pop</h3>
              <p className="fs-5">
                "Ayam Pop" is a traditional Indonesian dish featuring chicken
                that is boiled or steamed until tender. The chicken is then
                seasoned with simple spices like salt and pepper and served with
                steamed rice or other side dishes. It's known for its simplicity
                and wholesome flavor, making it a popular choice in Indonesian
                cuisine.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{ height: windowHeight, objectFit: "contain" }}
              src="http://pagisore.id/food/Ayam-Panggang.jpg"
              alt="Slide 3"
            />
            <div className="legend">
              <h3>Ayam Panggang</h3>
              <p className="fs-5">
                "Ayam panggang" is a popular Indonesian dish consisting of
                grilled or roasted chicken. The chicken is typically marinated
                in a flavorful mixture of spices, herbs, and sometimes a sauce
                like soy sauce or coconut milk before being grilled or roasted
                until golden brown and tender. It's a delicious and savory dish
                enjoyed by many in Indonesia and beyond.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{ height: windowHeight, objectFit: "contain" }}
              src="http://pagisore.id/food/Ayam-Goreng.jpg"
              alt="Slide 3"
            />
            <div className="legend">
              <h3>Ayam Goreng</h3>
              <p className="fs-5">
                "Ayam goreng" is a classic Indonesian dish of fried chicken. The
                chicken pieces are usually marinated with a blend of spices such
                as garlic, turmeric, coriander, and lemongrass to infuse flavor.
                After marination, the chicken is deep-fried until crispy and
                golden brown. It's a beloved dish in Indonesia, often served
                with rice, sambal (chili paste), and other side dishes. Ayam
                goreng is cherished for its crunchy texture and aromatic spices,
                making it a favorite comfort food.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{ height: windowHeight, objectFit: "contain" }}
              src="http://pagisore.id/food/Udang-Tofu.jpg"
              alt="Slide 3"
            />
            <div className="legend">
              <h3>Udang Tofu</h3>
              <p className="fs-5">
                "Udang tofu" is a dish that combines shrimp (udang) and tofu.
                The dish typically involves stir-frying or braising tofu and
                shrimp together with various seasonings and sauces such as soy
                sauce, garlic, ginger, and sometimes chili peppers. It's a
                flavorful and protein-rich dish commonly found in Asian cuisine,
                offering a satisfying combination of textures and flavors from
                the tender shrimp and soft tofu.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
