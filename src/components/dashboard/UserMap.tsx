"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

// Sample user data: country codes and user percentage
const userData = [
  { country: 'USA', percentage: 35 },
  { country: 'IND', percentage: 20 },
  { country: 'BRA', percentage: 15 },
  { country: 'GBR', percentage: 10 },
  { country: 'CAN', percentage: 5 },
  { country: 'AUS', percentage: 5 },
  { country: 'MEX', percentage: 5 },
  { country: 'FRA', percentage: 3 },
  { country: 'GER', percentage: 2 },
  { country: 'JPN', percentage: 2 },
];

// GeoJSON URL for world map
const geoUrl =
  'https://raw.githubusercontent.com/d3/d3-geo/master/test/data/world-110m.geojson';

interface UserData {
  country: string;
  percentage: number;
}

interface Feature {
  properties: {
    ISO_A3: string; // ISO Alpha-3 country code
  };
}

const UserMap: React.FC = () => {
  const [data, setData] = useState<UserData[]>(userData);
  const [geoJsonData, setGeoJsonData] = useState<any>(null); // To store fetched GeoJSON data
  const [error, setError] = useState<string | null>(null); // State to hold error messages
  const [isClient, setIsClient] = useState(false); // State to check if the component is mounted on the client

  useEffect(() => {
    setIsClient(true); // Set to true when the component mounts
  }, []);

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await fetch(geoUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const geoJson = await response.json();
        setGeoJsonData(geoJson);
      } catch (err: any) {
        setError(err.message); 
        console.error("Error fetching GeoJSON data:", err);
      }
    };

    if (isClient) {
      fetchGeoJson(); 
    }
  }, [isClient]);

  const getFillColor = (percentage: number) => {
    if (percentage <= 5) return '#f0f0f0';
    if (percentage <= 10) return '#9e9e9e';
    if (percentage <= 20) return '#7c4dff';
    if (percentage <= 35) return '#4caf50';
    return '#c62828';
  };

  const onEachCountry = (country: Feature, layer: L.GeoJSON) => {
    const countryData = data.find((item) => item.country === country.properties.ISO_A3);
    const percentage = countryData ? countryData.percentage : 0;
    const fillColor = getFillColor(percentage);
    
    layer.setStyle({
      fillColor: fillColor,
      weight: 0.5,
      color: '#fff',
      fillOpacity: 1,
    });

    layer.bindPopup(`<strong>${country.properties.ISO_A3}</strong>: ${percentage}%`);
  };

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there is an error
  }

  if (!geoJsonData) {
    return <div>Loading map...</div>; // Loading state while fetching data
  }

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <h2>User Distribution by Country</h2>
      <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={geoJsonData}
          style={(feature: any) => {
            const countryData = data.find((item) => item.country === feature.properties.ISO_A3);
            const percentage = countryData ? countryData.percentage : 0;
            const fillColor = getFillColor(percentage);

            return {
              fillColor: fillColor,
              weight: 0.5,
              color: '#fff',
              fillOpacity: 1,
            };
          }}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
      <div style={{ marginTop: '20px' }}>
        <h3>Percentage Breakdown by Country:</h3>
        {data.map((country) => (
          <div key={country.country}>
            {country.country}: {country.percentage}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMap;