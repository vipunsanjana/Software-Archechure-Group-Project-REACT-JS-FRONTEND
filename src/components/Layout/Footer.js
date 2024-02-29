// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center text-white bg-black py-2">
//         All Rights Reserved &copy; Techinfoyt
//       </h1>
//      
//     </div>
//   );
// };

// export default Footer;

import React from 'react';



import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
              
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Our knowledgeable staff is dedicated to providing expert advice and personalized
           service to help you find the perfect solution tailored to your requirements and budget.
          </p>
        </section>

        <section>
          <MDBRow style={{justifyContent:'center'}}>              
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' ,fontWeight: '900',backgroundColor:'grey' ,padding:'.5rem',borderRadius:'10px'      }}>
                  Contact
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li >
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' , fontWeight: '900' ,backgroundColor:'grey' ,padding:'.5rem',borderRadius:'10px'}} >
                  Policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' , fontWeight: '900',backgroundColor:'grey' ,padding:'.5rem',borderRadius:'10px'}}>
                  About
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' , fontWeight: '900',backgroundColor:'grey' ,padding:'.5rem',borderRadius:'10px'}}>
                  Address
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
     
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://.com/' style={{ textDecoration: 'none' ,fontWeight: '900'}} >
          VI SOLUTIONS
        </a>
      </div>
    </MDBFooter>
  );
}