# I-FLARE
This repository contains the codebase for Indonesia Flood Watch and Early Warning System (I-FLARE), a web-based Flooding Early Warning System designed to monitor and predict river discharge levels on Citarum-Cilicis Watershed, Indonesia. This system combines GIS visualization, real-time data integration, and machine learning-based predictions to aid early warnings for potential flood events.

## Project Overview
This web application is built with a full-stack WebGIS architecture and leverages machine learning to predict river discharge levels. It integrates observed and predicted hydrological data, displaying it on an interactive map. The backend processes data through a custom ML model, while the front end allows users to visualize the results seamlessly.

## Key Features
- GIS Map Visualization: Interactive map using Leaflet.js to display river discharge data on the island.
- Machine Learning Predictions: TensorFlow model deployed to forecast river discharge based on historical data.
- Real-Time Data: Integration with GeoServer and PostGIS for efficient spatial data handling and updates.
- Flood Warning System: Thresholds and alerts visually indicate potential flood risks.

## Tech Stack
- Database: PostgreSQL with PostGIS extension for spatial data support.
- GIS Publisher: GeoServer for serving spatial data layers (WMS/WFS).
- Backend: Node.js Express server handling API requests and ML integration.
- Frontend: Next.js (React-based) and Tailwind CSS for responsive, user-friendly UI.
- Map Base: Leaflet.js for mapping and data visualization.
- Web Server: Apache for reverse proxy and handling client requests.
