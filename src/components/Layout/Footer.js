import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section
          className="mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2rem",
            gap: "2rem",
          }}
        >
          <Link to="">
            <FaFacebook />
          </Link>
          <Link to="">
            <FaInstagram />
          </Link>
          <Link to="">
            <AiOutlineGoogle />
          </Link>
        </section>

        {/* Newsletter signup */}
        <section>
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        {/* Information sections */}
        <section className="mb-4">
          <p>
            Our knowledgeable staff is dedicated to providing expert advice and
            personalized service to help you find the perfect solution tailored
            to your requirements and budget.
          </p>
        </section>

        <section>
          {/* Navigation links */}
          <MDBRow style={{ justifyContent: "center" }}>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{
                      textDecoration: "none",
                      fontWeight: "900",
                      backgroundColor: "grey",
                      padding: ".5rem",
                      borderRadius: "10px",
                    }}
                  >
                    Policy
                  </a>
                </li>
              </ul>
              <h6 style={{marginTop:'2rem'}}>
              At VI SOLUTIONS, we are committed to protecting your privacy and ensuring 
              the security of your personal information. 
              </h6>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{
                      textDecoration: "none",
                      fontWeight: "900",
                      backgroundColor: "grey",
                      padding: ".5rem",
                      borderRadius: "10px",
                    }}
                  >
                    About
                  </a>
                </li>
              </ul>
              <h6 style={{marginTop:'2rem'}}>
              At VI SOLUTIONS, we are passionate about providing top-quality c
              omputer products and exceptional service to our customers
              </h6>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{
                      textDecoration: "none",
                      fontWeight: "900",
                      backgroundColor: "grey",
                      padding: ".5rem",
                      borderRadius: "10px",
                    }}
                  >
                    Address
                  </a>
                </li>
              </ul>
              <h6 style={{marginTop:'2rem'}}>
                infront of bus stand,
                Nittambuva,
                Gampaha
              </h6>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a
          className="text-white"
          href="https://.com/"
          style={{ textDecoration: "none", fontWeight: "900" }}
        >
          VI SOLUTIONS
        </a>
      </div>
    </MDBFooter>
  );
}
