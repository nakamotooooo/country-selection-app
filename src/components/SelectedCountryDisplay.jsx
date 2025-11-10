// src/components/SelectedCountryDisplay.jsx
import React from 'react';
import useCountryStore from '../store/countryStore';

const SelectedCountryDisplay = () => {
  const selectedCountry = useCountryStore((state) => state.selectedCountry);

  if (!selectedCountry) {
    return (
      <div className="mt-8 text-center text-gray-500">
        Please select a country from the list.
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md w-full max-w-sm flex flex-col items-center">
      <h2 className="text-xl font-bold text-gray-700 mb-4">You have selected:</h2>
      <div className="flex items-center">
        <img 
          src={selectedCountry.flagUrl} 
          alt={`${selectedCountry.name} flag`} 
          className="w-auto h-8 mr-4 rounded shadow-lg"
        />
        <span className="text-2xl font-medium text-gray-800">{selectedCountry.name}</span>
      </div>
    </div>
  );
};

export default SelectedCountryDisplay;