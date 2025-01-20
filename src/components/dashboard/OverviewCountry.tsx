import React from 'react';
import CountryDetails from './CountryDetails';

interface OverviewCountryProps {
  role: string;
  data: { countryCode: string, countryName: string, countryPopulation: number }[]; // Explicitly defining the structure of the data
}

const OverviewCountry: React.FC<OverviewCountryProps> = ({ role, data }) => {
  return (
    <div className="flex flex-col w-[552px]">
      <div className="flex flex-row justify-between py-2 px-2">
        <h5 className="font-bold">{role}</h5>
        <p className="cursor-pointer underline text-sm text-grey-400">See All</p>
      </div>
      <div className="py-2 px-2">
        {/* Map data here using CountryDetails */}
        {data.map((country, index) => (
          <CountryDetails 
            key={index}
            countryCode={country.countryCode}
            countryName={country.countryName}
            countryPopulation={country.countryPopulation}
          />
        ))}
      </div>
    </div>
  );
}

export default OverviewCountry;
