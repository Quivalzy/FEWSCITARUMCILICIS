'use client';
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Map: React.FC = () => {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map', {
            center: [-6.9175, 107.6191], // Set the center to Bandung
            zoom: 13, // Set the initial zoom level
        });

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add a dark layer (you can use a different tile layer for dark mode)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }).addTo(map);

        // Clean up on unmount
        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default Map;