import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from "../images/bg1.avif";
import bg2 from "../images/bg2.avif";
import bg3 from "../images/bg3.avif";

const backgroundBanner = {
  1: bg1,
  2: bg2,
  3: bg3,
};

const Banner = () => {
  return (
    <div>
      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        useKeyboardArrows={true}>
        {data.banner_array.map((banner) => (
          <div key={banner.id} className="banner">
            <img src={backgroundBanner[banner.id_no]} alt="background" />

            <p>{banner.text}</p>

            {banner.button === true && (
              <a href={banner.link}>
                <button
                  style={{
                    width: "80px",
                    height: "20px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}>
                  {banner.btn_name}
                </button>
              </a>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
