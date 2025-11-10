// src/components/CountryList.jsx
import React from 'react';
import useCountryStore from '../store/countryStore';

const CountryList = () => {
  // Get state and actions from the store
  const { countries, selectedCountry, selectCountry } = useCountryStore();

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-sm">
      <ul className="divide-y divide-gray-200">
        {countries.map((country) => {
          const isSelected = selectedCountry?.id === country.id;

          return (
            <li
              key={country.id}
              onClick={() => selectCountry(country)}
              className={`
                p-4 flex items-center cursor-pointer transition-colors duration-200
                ${isSelected 
                  ? 'bg-blue-100 text-blue-800 font-semibold' 
                  : 'hover:bg-gray-50'
                }
              `}
            >
              <img 
                src={country.flagUrl} 
                alt={`${country.name} flag`} 
                className="w-8 h-auto mr-4 rounded-sm shadow"
              />
              <span>{country.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryList;