import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import MapComponent from "./components/Map/MapComponent";
import NavbarComponent from "./components/Navbar/NavbarComponent";

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];

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
      <div>
        <NavbarComponent />
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  );
};

export default App;
