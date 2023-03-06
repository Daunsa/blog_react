import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMediaQuery } from '@mui/material';


const Map = () => {
    const mapboxToken = 'pk.eyJ1Ijoic3VjaW9kYW4iLCJhIjoiY2xlbTgxODlvMGpnbjNycWN1bGxvNmljZiJ9.E-VhjyOJUw6HOTikGQlYnA';
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const zoom = isSmallScreen ? 0.4 : 3;
    return (
        <div className="sm:h-screen h-64 px-10">
            <MapContainer center={[51.505, -0.09]} zoom={zoom} className="h-full" scrollWheelZoom={false} style={{ zIndex: 0 }}>
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/suciodan/clestjt0q000m01nzb7cbmr5v/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
                    attribution="Map data &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                />
            </MapContainer>
        </div>
    );
};

export default Map;
