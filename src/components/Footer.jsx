// import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="#" className="fab fa-facebook-f"><FaFacebookF /></a>
          <a href="#" className="fab fa-twitter"><FaTwitter /></a>
          <a href="#" className="fab fa-instagram"><FaInstagram /></a>
          <a href="#" className="fab fa-linkedin"><FaLinkedinIn /></a>
          <a href="#" className="fab fa-pinterest"><FaPinterest /></a>
        </div>
        <div className="links">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
          <a href="#">blogs</a>
        </div>
        <div className="credit">
        © 2024 Copyright <span>Resturant Management</span> 
        </div>
      </section>
    </>
  );
};

export default Footer;
