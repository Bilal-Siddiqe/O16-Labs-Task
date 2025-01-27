import React from 'react';
import "./PopularDishes.css"

export default function PopularDishes() {
  return (
    <div className='container mt-5'>
      <div className="row align-items-center">
        
        <div className='col-lg-3 col-sml-6'>
          <h1 className="">Our Most <span className='text-primary'>Popular Dishes</span>  This Month</h1>
          <button className='btn btn-primary btn-lg rounded-pill px-4'>See all</button>
        </div>

        <div className='col-lg-9 col-sm-12 my-3 d-flex flex-wrap justify-content-around'>
          <div className="my-3 card dishesCard" style={{width: "15rem", fontSize: "0.8rem" }}>

            <img
              className="dihsesImg"
              src="https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28448.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid"
              alt="..."
              style={{ height: "200px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h6 className="card-title" style={{ fontSize: "0.9rem" }}>Menu Title</h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Pick <span className="text-primary">5</span> out of <span className="text-primary">10</span>
              </h6>
              <h5 className="card-title fw-bolder" style={{ fontSize: "1rem" }}>QAR 200</h5>
              <hr className="full-width-hr" />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid"
                    alt=""
                    height={35}
                    width={35}
                  />
                  <span className="ms-1 dishReview">
                    Marriot Head Chef
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", margin: 0 }}>
                  <span className="text-primary">★</span>4.5
                </p>
              </div>
            </div>

          </div>
          <div className="my-3 card dishesCard" style={{width: "15rem", fontSize: "0.8rem" }}>

            <img
              className="dihsesImg"
              src="https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28448.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid"
              alt="..."
              style={{ height: "200px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h6 className="card-title" style={{ fontSize: "0.9rem" }}>Menu Title</h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Pick <span className="text-primary">5</span> out of <span className="text-primary">10</span>
              </h6>
              <h5 className="card-title fw-bolder" style={{ fontSize: "1rem" }}>QAR 200</h5>
              <hr className="full-width-hr" />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid"
                    alt=""
                    height={35}
                    width={35}
                  />
                  <span className="ms-1 dishReview">
                    Marriot Head Chef
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", margin: 0 }}>
                  <span className="text-primary">★</span>4.5
                </p>
              </div>
            </div>

          </div>
          <div className="my-3 card dishesCard" style={{width: "15rem", fontSize: "0.8rem" }}>

            <img
              className="dihsesImg"
              src="https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28448.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid"
              alt="..."
              style={{ height: "200px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h6 className="card-title" style={{ fontSize: "0.9rem" }}>Menu Title</h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Pick <span className="text-primary">5</span> out of <span className="text-primary">10</span>
              </h6>
              <h5 className="card-title fw-bolder" style={{ fontSize: "1rem" }}>QAR 200</h5>
              <hr className="full-width-hr" />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?uid=R71898799&ga=GA1.1.1224853354.1737838260&semt=ais_hybrid"
                    alt=""
                    height={35}
                    width={35}
                  />
                  <span className="ms-1 dishReview">
                    Marriot Head Chef
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", margin: 0 }}>
                  <span className="text-primary">★</span>4.5
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
