import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842955027!2d72.41492903300148!3d23.020474101226686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712380850813!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <form action="https://formspree.io/f/xayrzybp" method="post">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" name="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" name="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <textarea type="text" placeholder="message" name="message" />
            </div>
            <input type="submit" value="send" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
