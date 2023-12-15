import React, { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import MarkerComponent from "./MarkerComponent";

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 44.564156868000524,
    lng: -123.27337630615084,
  };

  const onMapClick = (e) => {
    const newMarker = {
      position: e.latLng,
      date: "Some Date",
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      onClick={onMapClick}
      center={center}
    >
      {markers.map((marker, index) => (
        <MarkerComponent
          key={index}
          position={marker.position}
          date={marker.date}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
