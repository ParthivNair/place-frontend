import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 44.564156868000524,
  lng: -123.27337630615084,
};
const markers = [];
const markerList = () => {};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default App;
