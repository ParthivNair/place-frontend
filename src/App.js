import React, { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapComponent from "./components/Map/MapComponent";

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];

const App = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(mapRef.current);
  }, []);

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
      <MapComponent mapRef={mapRef} />
    </div>
  );
};

export default App;
