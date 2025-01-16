import React from 'react';
import CountryDetails from './CountryDetails';

interface OverviewCountryProps {
    role: string;
    data: [];
}

const OverviewCountry: React.FC<OverviewCountryProps> = ({role, data}) => {
  return (
    <div className="flex flex-column w-[552px]">
        <div className="flex flex-row justify-between py-2 px-2">
            <h5 className="text-bold">role</h5>
            <p className="cursor-pointer text-decoration-underline text-sm text-grey-400"> </p>
        </div>
        <div>
            {/* Map data here using CountryDetails */}

        </div>
    </div>
  )
}

export default OverviewCountry