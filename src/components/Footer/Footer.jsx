import React from "react";
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional, adds smooth scrolling animation
  });
};

const Footer = () => {
  return (
    <footer className="mt-12 py-14 z-100 bg-[#F2F5F8] font-poppins">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 sm:gap-x-10 md:gap-x-20 lg:gap-x-[80px] px-10 md:px-10 lg:px-5">
          {/* Column 1 */}
          <div className="  mb-4 md:mb-0">
          <Link to="/" onClick={scrollToTop}><h3 className=" text-2xl font-semibold mb-3">Refyndata</h3></Link>
            <img
              src="/footer/verify.png"
              alt="company_verification"
              width={100}
              height={50}
              className=" mb-3 transform transition-transform hover:translate-y-[-5px] py-2"
            />
            <p className="mb-3 text-sm transform transition-transform hover:translate-y-[-5px]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-4 md:mb-0 text-[#0B1320]">
            <h3 className="text-xl font-semibold mb-3">Company</h3>
            <div className="flex flex-col">
              <a href="/about" className=" mb-3 transform transition-transform hover:translate-y-[-5px]" onClick={scrollToTop}>
                About Us
              </a>
              <a href="/services" className=" mb-3 transform transition-transform hover:translate-y-[-5px]">
                Services
              </a>
              <a href="/careers" className="mb-3  transform transition-transform hover:translate-y-[-5px]">
                Career
              </a>
              <a href="/clients" className=" mb-3 transform transition-transform hover:translate-y-[-5px]">
                Clients
              </a>
              
            </div>
          </div>

          {/* Column 3 */}
          <div className="mb-4 md:mb-0 text-[#0B1320]">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <a href="mailto:example@example.com" className="mb-3 inline-block transition-transform hover:-translate-y-1">Email: info@refyndata.com</a>

            <br></br>
            <a href="tel:+1 301-591-0989" className="mb-3 inline-block transition-transform hover:-translate-y-1">Contact: +1 301-591-0989 ext: 403</a>
            <br></br>
            <a href="/contact" className="mb-3 inline-block transition-transform hover:-translate-y-1"> Write to Us
            </a>
          </div>

          {/* Column 4 */}
          <div className="mb-4 md:mb-0 text-[#0B1320] ">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="">
              <a
                href="https://www.linkedin.com/in/refyn-d-47489b21/"
                className=" block mb-3 transform transition-transform hover:translate-y-[-5px]"
              >
                 LinkedIn
              </a>
              <a href="#" className=" block mb-3 transform transition-transform hover:translate-y-[-5px]">
                Twitter
              </a>
              <a href="#" className="mb-3  block transform transition-transform hover:translate-y-[-5px]">
                Facebook
              </a>
            </div>
          </div>
        </div>
        {/* Line below the footer */}
        <div className="border-t border-gray-600 my-4 mx-5">
          <div className="container mx-auto">
            <div className="flex justify-between items-center text-[#0B1320]">
              <p className="text-xs ">Refyndata @ 2024 All rights reserved</p>
              <div className="flex space-x-4">
                <a href="#" className=" text-xs">
                  Terms and Conditions
                </a>
                <a href="#" className="text-xs">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


{/* 
<Link to="/" >Home</Link>
<Link to="/about" ></Link>
<Link to="/services" ></Link>
<Link to="/careers" ></Link>
<Link to="/clients" ></Link>
<Link to="/contact" ></Link> 
*/}