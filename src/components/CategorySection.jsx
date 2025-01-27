import React from 'react';
import "./CategorySection.css";

export default function CategorySection() {
  return (
    <div className='container my-5'>
      <h1 className="">Brows by <span className='text-primary'> Categories </span></h1>
      <div className='CateContainer row justify-content-between align-items-center'>

        <div className="col-lg-6 col-12 cateItems cate01 h3 pb-4">Explore Food</div>

        <div className='col-lg-6 col-12 row justify-content-between align-items-center'>
          <div className="col-12 col-lg-6">
            <div className="cateItems cate02 h5 pb-4">Master Chefs</div>
            <div className="cateItems cate03 h5 pb-4">Desserts</div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="cateItems cate04 h5 pb-4">Events</div>
            <div className="cateItems cate05 h5 pb-4">Birthdays</div>
          </div>
        </div>

      </div>
    </div>
  )
}
