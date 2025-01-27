import React from "react";
import "./ReviewsSection.css";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "John Doe",
      role: "Customer",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis, tenetur dolores, a debitis ipsam suscipit cupiditate obcaecati amet modi.",
      rating: 4.7,
    },
    {
      name: "Jane Doe",
      role: "Customer",
      imageUrl:
        "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis, tenetur dolores, a debitis ipsam suscipit cupiditate obcaecati amet modi.",
      rating: 4.8,
    },
    {
      name: "Sam Smith",
      role: "Customer",
      imageUrl:
        "https://images.pexels.com/photos/19424722/pexels-photo-19424722/free-photo-of-black-man-wearing-a-jacket-and-turtleneck-fashion.jpeg?auto=compress&cs=tinysrgb&w=600",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis, tenetur dolores, a debitis ipsam suscipit cupiditate obcaecati amet modi.",
      rating: 4.8,
    },
  ];

  return (
    <div className="container my-5">
      <h1>What Our</h1>
      <h1>
        <span className="text-primary">Customers</span> Says
      </h1>
      <div className="container reviewSection mt-5 d-flex align-items-center">
        {/* Backward Button */}
        <button
          className="d-none d-md-block"
          onClick={() => console.log("Backward clicked")}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        {/* All Cards */}
        <div className="d-flex flex-wrap justify-content-center">
          {reviews.map((review, index) => (
            <div key={index} className="review-card mx-3 my-2">
              <div className="header-content">
                <div className="img-area">
                  <img alt="Customer" src={review.imageUrl} />
                </div>
                <div className="info">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
              <div className="single-review">
                <p>{review.reviewText}</p>
              </div>
              <div className="review-footer">
                <div className="rating">
                  <p>
                    <span className="active">★</span> {review.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Forward Button */}
        <button
          className="d-none d-md-block"
          onClick={() => console.log("Forward clicked")}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}
