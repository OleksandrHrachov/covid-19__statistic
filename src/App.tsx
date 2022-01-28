import React, { useState, useEffect } from 'react';
import './App.scss';
import { Country } from './interface/Country';

import { Logo } from './components/Logo/Logo';
import { Search } from './components/Search/Saerch';
import { CountriesTable } from './components/CountryTable/CountriesTable';
import { CountryDetails } from './components/CountryDetails/CountryDetails';

import { getAllCountries } from './api/countries';

export const App: React.FC = () => {
  const [countriesList, setCountriesList] = useState<null | Country[]>(null);
  const [selectedCountry, setSelectedCountry] = useState<null | string>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const loadAllCountries = async () => {
    const allCountries = await getAllCountries();

    setCountriesList(allCountries);
  };

  useEffect(() => {
    loadAllCountries();
  }, []);

  const selectCountry = (countryName: string) => {
    setSelectedCountry(countryName);
  };

  return (
    <div
      className="app__container"
    >

      <div className="app__top">
        <Logo />
        <Search
          value={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {countriesList === null ? (
        <h2>no data</h2>
      ) : (
        <>
          <CountriesTable
            countriesList={countriesList}
            selectCountry={selectCountry}
            searchQuery={searchQuery}
          />
        </>
      )}

      {(selectedCountry && countriesList) && (
        <CountryDetails
          countriesList={countriesList}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </div>
  );
};
