import React, { useRef, useEffect } from 'react';

const MapComponent = () => {
    const mapRef = useRef(null);
    
    useEffect(() => {
        const mapOptions = {
            center: { lat: 44.564156868000524, lng: -123.27337630615084 },
            zoom: 14,
        };
        
        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        
        map.addListener('click', (event) => {
            console.log("Inside Listener");
            handleMapClick(event.latLng);
        });
    }, []);
    
    const handleMapClick = (location) => {
        console.log("Handling Click");
        new window.google.maps.Marker({
            position: location,
            map: mapRef.current,
            title: 'New Marker',
        });
    };
    
    return <div ref={mapRef} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default MapComponent;