import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1>About Us</h1>
        <ul>
            <li>We are committed to providing high-quality products and excellent customer service.</li>
            <li>Our team is dedicated to ensuring your shopping experience is seamless and enjoyable.</li>
            <li>We source our products from trusted suppliers to guarantee authenticity and reliability.</li>
            <li>Customer satisfaction is our top priority, and we strive to exceed your expectations.</li>
            <li>At our core, we believe in transparency, integrity, and innovation.</li>
        </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
