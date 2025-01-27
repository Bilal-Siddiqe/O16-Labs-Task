import React from 'react';
import logo from "../assets/O-16Logo.png"
import "./Footer.css"

export default function Footer() {
  return (
    <div className='bg-dark text-white'>
      <footer class="pt-5 pb-4 container">
        <div class="row justify-content-around ">
          
          <div class="d-none d-md-block col-md-3 d-flex flex-wrap justify-content-start align-items-cente">
            <img src={logo} alt="" height={200} width={200} />
          </div>

          <div class="col-12 col-md-3">
            <h5 className='text-primary'>Address</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><i class="fa-solid fa-location-dot text-white"></i> Park Avenue South, New York,74812 United States</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><i class="fa-solid fa-envelope text-white"></i> contact@o16labs.com</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><i class="fa-solid fa-phone text-white"></i> 000-123-456</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs Contacts</a></li>
            </ul>
          </div>

          <div class="col-12 col-md-2">
            <h5 className='text-primary'>Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">How it works</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Our Chefs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Reviews</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Whats New</a></li>
            </ul>
          </div>

          <div class="col-12 col-md-3">
            <form>
              <h5 className='text-primary'>Subscribe to Newsletter</h5>
              <div class="d-flex justify-content-around w-75 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                <button class="btn btn-primary" type="button"><i class="fa-solid fa-paper-plane"></i></button>
              </div>

              <h5 className='mt-5'>Our Social</h5>
              <div class="d-flex w-100 gap-2">
                <i class="h5 fa-brands fa-facebook text-primary"></i>
                <i class="h5 mx-2 fa-brands fa-twitter text-primary"></i>
                <i class="h mx-2 fa-brands fa-instagram text-primary"></i>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center pt-2">
          <hr className="line d-none d-md-block" />
          <p className="mx-3 mb-0">© 2021 Company, Inc. All rights reserved.</p>
          <hr className="line d-none d-md-block" />
        </div>
      </footer>
    </div>
  )
}
