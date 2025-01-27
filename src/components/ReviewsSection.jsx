import React from "react";
import "./ReviewsSection.css";

export default function ReviewsSection() {
  return (
    <div className="container my-5">
      <h1>What Our</h1>
      <h1>
        <span className="text-primary">Customers</span> Says
      </h1>
      <div className="reviewSection mt-5 d-flex align-items-center">
        {/* Backward Button */}
        <button className="" onClick={() => console.log("Backward clicked")}>
          <i className="fa-solid fa-angle-left"></i>
        </button>

        {/* All Cards */}
        <div className="d-flex justify-content-center">
          {/* Review Card 1 */}
          <div className="review-card mx-3 my-2">
            <div className="header-content">
              <div className="img-area">
                <img
                  alt="Customer"
                  src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg"
                />
              </div>
              <div className="info">
                <h4>John Doe</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="single-review">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur omnis, tenetur dolores, a debitis ipsam suscipit
                cupiditate obcaecati amet modi.
              </p>
            </div>
            <div className="review-footer">
              <div className="rating">
                <p>
                  <span className="active">★</span> 4.7
                </p>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="d-none d-md-block review-card mx-3 my-2">
            <div className="header-content">
              <div className="img-area">
                <img
                  alt="Customer"
                  src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg"
                />
              </div>
              <div className="info">
                <h4>Jane Doe</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="single-review">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur omnis, tenetur dolores, a debitis ipsam suscipit
                cupiditate obcaecati amet modi.
              </p>
            </div>
            <div className="review-footer">
              <div className="rating">
                <p>
                  <span className="active">★</span> 4.8
                </p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="d-none d-md-block review-card mx-3 my-2">
            <div className="header-content">
              <div className="img-area">
                <img
                  alt="Customer"
                  src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg"
                />
              </div>
              <div className="info">
                <h4>Jane Doe</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="single-review">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur omnis, tenetur dolores, a debitis ipsam suscipit
                cupiditate obcaecati amet modi.
              </p>
            </div>
            <div className="review-footer">
              <div className="rating">
                <p>
                  <span className="active">★</span> 4.8
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Forward Button */}
        <button className="" onClick={() => console.log("Forward clicked")}>
          <i className="fa-solid fa-angle-right "></i>
        </button>
      </div>
    </div>
  );
}
