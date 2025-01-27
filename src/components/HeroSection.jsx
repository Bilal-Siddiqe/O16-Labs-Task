import React from 'react';
import HeroItem1 from "../assets/HeroItem1.png";
import HeroItem2 from "../assets/HeroItem8.png";
import HeroItem3 from "../assets/HeroItem3.png";
import HeroItem4 from "../assets/HeroItem5.png";
import "./HeroSection.css";

export default function HeroSection() {
  const customerImages = [
    "https://images.pexels.com/photos/19322788/pexels-photo-19322788/free-photo-of-viking-princess-wearing-fur.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5234256/pexels-photo-5234256.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1"
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Section */}

        <div className="leftHero col-12 col-lg-5 ">
          <div>
            <h1>
              Book <span className="text-primary">O16 Labs</span>
            </h1>
            <h1>For you</h1>
            <h1>
              Dinner <span className="text-primary">Party</span>
            </h1>
            <p className="text-muted">
              We're providing the best Chefs booking platform,
            </p>
            <p className="text-muted" style={{marginTop:"-15px"}}>Choose a menu and book your Chef instantly.</p>
          </div>

          {/* Data Input Section */}
          <div className="userData d-flex flex-wrap justify-content-between align-items-center">
            <div className="dataCard d-flex flex-wrap justify-content-between align-items-center">
              <div className="region">
                Select Region <br />
                <span className="text-muted">Name</span>
              </div>
              <div className="divider"></div>
              <div className="date">
                Select Date <br />
                <span className="text-muted">01 Jan 2024</span>
              </div>
              <div className="divider"></div>
              <div className="person">
                Select Persons <br />
                <span className="text-muted">02</span>
              </div>
            </div>

            <button className="btn btn-primary btn-lg rounded-circle">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>

          {/* Customer Reviews Section */}
          <div className="mt-4 d-flex flex-wrap justify-content-between align-items-center">

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                {customerImages.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Customer ${index + 1}`}
                    width={50}
                    height={50}
                    className={`customerImage image-${index + 1}`}
                  />
                ))}
              </div>

              <div>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Our happy customers
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ color: "#f8c531", fontSize: "16px" }}>★</span>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>4.7</span>
                  <span style={{ color: "gray", fontSize: "14px" }}>(8.2K Reviews)</span>
                </div>
              </div>
            </div>

            <div>
              <p className='text-muted'><i>We accept</i></p>
              <i class="fa-brands fa-cc-visa text-primary"></i>
              <i class="ms-2 fa-brands fa-cc-mastercard text-warning"></i>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="col-7 d-none d-lg-block position-relative rightHero ">
          <img
            className="heroItems heroItem1 position-absolute"
            src={HeroItem1}
            alt=""
            width={350}
          />
          <img
            className="heroItems heroItem2 position-absolute"
            src={HeroItem2}
            alt=""
            width={250}
          />
          <img
            className="heroItems heroItem3 position-absolute"
            src={HeroItem3}
            alt=""
            width={350}
          />
          <img
            className="heroItems heroItem4 position-absolute"
            src={HeroItem4}
            alt=""
            width={350}
          />
        </div>

      </div>
    </div>
  );
}
