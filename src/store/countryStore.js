// src/store/countryStore.js
import { create } from 'zustand';

// Define our initial data. The flagUrl points to the /public folder.
const countriesData = [
  { id: 'PT', name: 'Portugal', flagUrl: '/flags/portugal.svg' },
  { id: 'SE', name: 'Sweden', flagUrl: '/flags/sweden.svg' },
  { id: 'FR', name: 'France', flagUrl: '/flags/france.svg' },
  { id: 'BE', name: 'Belgium', flagUrl: '/flags/belgium.svg' },
];

const useCountryStore = create((set) => ({
  // State
  countries: countriesData,
  selectedCountry: null,

  // Actions
  selectCountry: (country) => set({ selectedCountry: country }),
}));

export default useCountryStore;