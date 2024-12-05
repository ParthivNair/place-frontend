import React, { useState, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import MarkerComponent from "./MarkerComponent";

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const [center, setCenter] = useState({
    lat: 44.564156868000524,
    lng: -123.27337630615084,
  });
  const [zoom, setZoom] = useState(14);
  const mapRef = useRef(null);

  const onMapIdle = () => {
    if (mapRef.current) {
      setCenter(mapRef.current.getCenter().toJSON());
      setZoom(mapRef.current.getZoom());
    }
  };

  const onMapClick = (e) => {
    const newMarker = {
      position: e.latLng,
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    console.log(newMarker);
  };

  const defaultMapOptions = {
    disableDefaultUI: true,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      onClick={onMapClick}
      center={center}
      onIdle={onMapIdle}
      options={defaultMapOptions}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      {markers.map((marker, index) => (
        <MarkerComponent key={index} position={marker.position} />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
