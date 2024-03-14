


import React from "react";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
      <div className="container mx-auto p-4 font-poppins ">
        <div className="mb-10">
          <h1 className="text-md font-bold">Home / Contact Us</h1>
        </div>
        <div className="mb-10">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <div className="border border-gray-300 my-2"></div>
          </div>
          <p className="text-lg">
            Begin the Dialogue<br></br>
            Thank you for reaching out to us. Please complete the email form,
            submit it, and we will get back to you at our earliest convenience.
          </p>
        </div>

        {/* email and phone contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-x-4 lg:gap-x-20 ">
          {/* Phone number */}
          <div className="flex items-center mx-[20px]">
            <img
              src="/contact_us/phone.png"
              alt="phone_icon"
              width={16}
              height={16}
              className="mb-3"
            />

            <a href="tel:+1 301-591-0989" className="ml-2 mb-3">+1 301-591-0989 ext: 403</a>
          </div>
          {/* Email */}
          <div className="flex items-center mx-[20px]">
            <img
              src="/contact_us/email.png"
              alt="email_icon"
              width={20}
              height={20}
              className="mb-3"
            />
            <a href="mailto:example@example.com" className="ml-2 mb-3 ">info@refyndata.com</a>
          </div>
          {/* Empty column */}
          <div></div>
        </div>

       
        {/*  Address and location*/}
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-x-4 lg:gap-x-20 mt-5">

          {/*Registered Office  */}
          <Link to="https://maps.app.goo.gl/8VhdYJpt6cyVfLPn6" target="_blank" rel="noopener noreferrer">
          <div className="mx-[30px]">
            <img
              src="../contact_us/virginia_meryland.jpeg"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2 items-center"
            />
            <p className="text-xl font-semibold">Registered Office:</p>
            <p className="text-sm font-semibold">Clarksburg, West Virginia</p>
            <p className="text-sm mb-5">
            11504 ELKHORN DRIVE,CLARKSBURG-MD-20871{" "}
            </p>
          </div></Link>

          {/* Corporate Office: */}
          <Link to="https://maps.app.goo.gl/qQoeapZDNDp2uduZ6" target="_blank" rel="noopener noreferrer">
          <div className="mx-[30px]">
            <img
              src="/contact_us/cororate.png"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2"
            />
            <p className="text-xl font-semibold">Corporate Office:</p>
            <p className="text-sm font-semibold">Herndon,Virginia</p>
            <p className="text-sm mb-5">
            13800 Coppermine RD Suite #162,Herndon,VA-20171{" "}
            </p>
          </div>
          </Link>

          {/* Innovative Center: */}
          <Link to="https://maps.app.goo.gl/m9CeNJ8Cj2sczYhu6" target="_blank" rel="noopener noreferrer">
          <div className="mx-[30px]">
            <img
              src="/contact_us/visakhapatnam.png"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2"
            />
            <p className="text-xl font-semibold">Innovative Center:</p>
            <p className="text-sm font-semibold">Visakhapatnam</p>
            <p className="text-sm">
              A-hub, Andhra University incubation center,<br></br> AU North
              Campus, Visakhapatnam, AP-530003{" "}
            </p>
          </div>
          </Link>
        </div>
      </div>

  );
}


