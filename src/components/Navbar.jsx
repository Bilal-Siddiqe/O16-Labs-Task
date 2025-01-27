import React from 'react';
import logo from "../assets/O-16Logo.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="container-md">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" height={55} width={50} />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link ourNavLinks" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link ourNavLinks" href="#">How it Works</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link ourNavLinks" href="#">Our Chef</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link ourNavLinks" href="#">Book</a>
                        </li>
                    </ul>

                    <form className="d-flex align-items-center">
                        <button className="btn navBtn" type="submit">
                            <i className="fa-regular fa-user me-2"></i>Sign Up
                        </button>
                        <div className="vertical-divider"></div>
                        <button className="btn navBtn" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
