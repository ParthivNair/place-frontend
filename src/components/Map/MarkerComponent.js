import React, { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

const MarkerComponent = ({ position, date }) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const toggleInfoWindow = () => {
    setInfoWindowOpen(!infoWindowOpen);
  };

  return (
    <Marker position={position} onClick={toggleInfoWindow}>
      {infoWindowOpen && (
        <InfoWindow position={position} onCloseClick={toggleInfoWindow} />
      )}
    </Marker>
  );
};

export default MarkerComponent;
