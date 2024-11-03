const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const GEOSERVER_URL = 'http://localhost:8080/geoserver/rest';
const USERNAME = 'Fal'; // Replace with your GeoServer username
const PASSWORD = 'geosportkey22'; // Replace with your GeoServer password

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Sample route to test the server
app.get('/', (req, res) => {
    res.send('GeoServer Back-End is Running!');
});

// Route to get layers from GeoServer
app.get('/layers', async (req, res) => {
  try {
      const response = await axios.get(`${GEOSERVER_URL}/layers`, {
          auth: {
              username: USERNAME,
              password: PASSWORD
          }
      });
      res.json(response.data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching layers from GeoServer');
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});