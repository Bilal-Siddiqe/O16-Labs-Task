import React from 'react';
import "./PopularDishes.css";

export default function PopularDishes() {
  // Array of popular dishes data
  const dishes = [
    {
      title: "Menu Title",
      subtitle: "Pick 5 out of 10",
      price: "QAR 200",
      imageUrl: "https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28448.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid",
      chefImageUrl: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid",
      chefName: "Marriot Head Chef",
      rating: 4.5
    },
    {
      title: "Menu Title",
      subtitle: "Pick 5 out of 10",
      price: "QAR 200",
      imageUrl: "https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28448.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid",
      chefImageUrl: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid",
      chefName: "Marriot Head Chef",
      rating: 4.5
    },
    {
      title: "Menu Title",
      subtitle: "Pick 5 out of 10",
      price: "QAR 200",
      imageUrl: "https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28448.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid",
      chefImageUrl: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid",
      chefName: "Marriot Head Chef",
      rating: 4.5
    },
  ];

  return (
    <div className='container mt-5'>
      <div className="row align-items-center">
        
        <div className='col-lg-3 col-sml-6'>
          <h1>Our Most <span className='text-primary'>Popular Dishes</span> This Month</h1>
          <button className='btn btn-primary btn-lg rounded-pill px-4'>See all</button>
        </div>

        <div className='col-lg-9 col-sm-12 my-3 d-flex flex-wrap justify-content-around'>
          {dishes.map((dish, index) => (
            <div key={index} className="my-3 card dishesCard" style={{width: "15rem", fontSize: "0.8rem" }}>
              <img
                className="dihsesImg"
                src={dish.imageUrl}
                alt={dish.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-title" style={{ fontSize: "0.9rem" }}>{dish.title}</h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {dish.subtitle}
                </h6>
                <h5 className="card-title fw-bolder" style={{ fontSize: "1rem" }}>{dish.price}</h5>
                <hr className="full-width-hr" />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src={dish.chefImageUrl}
                      alt={dish.chefName}
                      height={35}
                      width={35}
                    />
                    <span className="ms-1 dishReview">
                      {dish.chefName}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", margin: 0 }}>
                    <span className="text-primary">★</span>{dish.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
