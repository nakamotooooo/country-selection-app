// src/App.jsx
import React from 'react';
import CountryList from './components/CountryList';
import SelectedCountryDisplay from './components/SelectedCountryDisplay';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Country Selector
        </h1>
        <CountryList />
        <SelectedCountryDisplay />
      </div>
    </div>
  );
}

export default App;