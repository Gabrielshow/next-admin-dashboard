import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

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

interface GeographyData {
  properties: {
    ISO_A3: string; // ISO Alpha-3 country code
  };
}

const UserMap: React.FC = () => {
  const [data, setData] = useState<UserData[]>(userData);

  const colorScale = scaleQuantile<number>()
    .domain(data.map((d) => d.percentage))
    .range(['#f0f0f0', '#9e9e9e', '#7c4dff', '#4caf50', '#c62828']);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <h2>User Distribution by Country</h2>
      <ComposableMap projection="geoMercator" width={800} height={600}>
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: GeographyData[] }) =>
            geographies.map((geo: GeographyData) => {
              const countryData = data.find(
                (item) => item.country === geo.properties.ISO_A3
              );
              const percentage = countryData ? countryData.percentage : 0;
              const fillColor = colorScale(percentage) as string;

              return (
                <Geography
                  key={geo.properties.ISO_A3}
                  geography={geo}
                  fill={fillColor}
                  stroke="#fff"
                  strokeWidth={0.5}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div style={{ marginTop: '20px' }}>
         <h3>Percentage Breakdown by Country:</h3>
        {data.map((country) => (
          <div key={country.country}>
            <span>{country.country}</span> - {country.percentage}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMap;