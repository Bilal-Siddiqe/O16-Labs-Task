import React from 'react';
import "./AdvertisingSection.css";
import advBoard from "../assets/AdvertisingBoard.png"

export default function AdvertisingSection() {
  return (
    <div className='container mt-3 d-flex justify-content-center align-items-center'>
        <img className='advBoard' src={advBoard} alt=""/>
    </div>
  )
}
