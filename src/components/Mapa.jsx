import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useMediaQuery } from '@mui/material';

import { Link } from 'react-router-dom';


const Mapa = (props) => {
    const mapboxToken = 'pk.eyJ1Ijoic3VjaW9kYW4iLCJhIjoiY2xlbTgxODlvMGpnbjNycWN1bGxvNmljZiJ9.E-VhjyOJUw6HOTikGQlYnA';
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const zoom = isSmallScreen ? 0.4 : 3;


    const svgIcon = L.divIcon({
        html: `
        <svg viewBox="0 0 36.00 36.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.072"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>Abreme</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Vivid.JS" strokeWidth="0.00036" fill="none" fill-rule="evenodd"> <g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)"> <g id="Icons" transform="translate(37.000000, 169.000000)"> <g id="map-marker" transform="translate(78.000000, 468.000000)"> <g transform="translate(10.000000, 6.000000)"> <path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill="#ea4335"> </path> <circle id="Oval" fill="#b21511" fill-rule="nonzero" cx="14" cy="14" r="7"> </circle> </g> </g> </g> </g> </g> </g></svg>`,
        className: "svg-icon",
        iconSize: [24, 40],
        iconAnchor: [12, 40]
    });

    //const lugares = [[37.808600, -122.409800], [40.755205, -73.982997], [-30.031016, -51.234585], [-11.562800, -77.270000], [-23.551200, -46.658400], [41.6616, -0.8946], [51.505, -0.09], [-26.89319, -49.22981], [35.669590, 139.699690]]
    return (
        <div className="sm:h-screen h-64 px-10">
            <MapContainer center={[51.505, -0.09]} zoom={zoom} className="h-full" scrollWheelZoom={false} style={{ zIndex: 0 }}>
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/suciodan/clestjt0q000m01nzb7cbmr5v/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
                    attribution="Map data &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                />
                {props.data.map((lugar) => (
                    <Marker key={`marker${lugar.id}`} position={lugar.localizacion.split(", ").map(Number)} icon={svgIcon}>
                        <Popup>
                            <div className="sm:w-64 w-32">
                                <div className="bg-gray-50 rounded-lg shadow-md p-1">
                                    <h2 className="text-lg font-bold mb-2">{lugar.titulo}</h2>
                                    <Link to={`/post/${lugar.id}`}>
                                        <img className='mb-2' src={lugar.imagen_promocional} alt="" />
                                    </Link>
                                    <p className="text-sm text-gray-700 mb-4 hidden sm:block">{lugar.contenido}</p>
                                    <Link className="flex justify-center items-center" to={`/post/${lugar.id}`}>
                                        <button className="bg-zinc-500 hover:bg-zinc-600 text-white rounded-lg px-4 py-2">Ver más</button>
                                    </Link>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Mapa;
