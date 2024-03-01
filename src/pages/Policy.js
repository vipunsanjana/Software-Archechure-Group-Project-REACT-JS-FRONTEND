import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1>Privacy Policy</h1>
        <ul>
            <li>We respect your privacy and are committed to protecting it.</li>
            <li>We only collect information necessary to provide and improve our services.</li>
            <li>Your personal information is securely stored and never shared with third parties.</li>
            <li>We may use cookies and similar technologies to enhance your experience on our website.</li>
            <li>You have the right to access, update, and delete your personal information at any time.</li>
            <li>By using our services, you agree to the terms outlined in this Privacy Policy.</li>
        </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
