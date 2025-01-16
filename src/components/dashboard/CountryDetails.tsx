import React from 'react';
import Flag from 'react-world-flags';

interface CountryDetailsProps {
    countryCode: string;  // use the country code (ISO alpha-2)
    countryName: string;
    countryPopulation: number;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ countryCode, countryName, countryPopulation }) => {
  return (
    <div className="flex flex-row justify-start items-center">
        {/* pass the country code (ISO alpha-2) */}
        <Flag code={countryCode} style={{ width: 30, height: 30, marginRight: 10 }} alt={`${countryName}-flag`} />
        
        <div className="flex flex-column gap-2">
            <h4 className="font-bold">{countryName}</h4>
            <p className="text-sm bg-grey">{countryPopulation}</p>
        </div>
    </div>
  );
}

export default CountryDetails;
