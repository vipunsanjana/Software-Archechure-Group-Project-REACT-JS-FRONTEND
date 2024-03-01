import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";

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

       
        <section className="mb-4">
          <p>
            Our knowledgeable staff is dedicated to providing expert advice and
            personalized service to help you find the perfect solution tailored
            to your requirements and budget.
          </p>
        </section>

        <section>
          <MDBRow className="justify-content-center">
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none fw-bold px-3 py-1 bg-secondary rounded"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/policy"
                    className="text-white text-decoration-none fw-bold px-3 py-1 bg-secondary rounded"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/about"
                    className="text-white text-decoration-none fw-bold px-3 py-1 bg-secondary rounded"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/address"
                    className="text-white text-decoration-none fw-bold px-3 py-1 bg-secondary rounded"
                  >
                    Address
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} VI SOLUTIONS. All rights reserved.
      </div>
    </MDBFooter>
  );
}
