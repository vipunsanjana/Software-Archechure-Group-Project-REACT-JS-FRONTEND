import React from 'react';
import GoogleMapReact from 'google-map-react';
import Layout from "./../components/Layout/Layout";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Address = () => {
  // Set the coordinates for University of Kelaniya
  const defaultCenter = {
    lat: 7.0736,
    lng: 80.0041
  };

  const defaultZoom = 15; // Set the default zoom level

  return (
    <Layout title={"Address"}>
     <h1 className="bg-dark p-2 text-white text-center">Location</h1>
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <AnyReactComponent
          lat={defaultCenter.lat}
          lng={defaultCenter.lng}
          text="University of Kelaniya"
        />
      </GoogleMapReact>
    </div>
    </Layout>
  );
};

export default Address;