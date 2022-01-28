import React, { useState, useEffect } from 'react';
import './CountriesTable.scss';
import { Country } from '../../interface/Country';

type Props = {
  countriesList: Country[],
  selectCountry: (arg: string) => void,
  searchQuery: string,
};

export const CountriesTable: React.FC<Props> = ({
  countriesList,
  selectCountry,
  searchQuery,
}) => {
  const [visibleCountriesList, setVisibleCountriesList] = useState<Country[]>([...countriesList]);
  const [sortCountriesNameASC, setSortCountriesNametASC] = useState(true);
  const [sortConfirmedASC, setSortConfirmedASC] = useState(true);

  useEffect(() => {
    const filteredCountriesList = [...countriesList].filter(
      country => country.Country.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0,
    );

    setVisibleCountriesList(filteredCountriesList);
  }, [searchQuery]);

  const sortByCountry = () => {
    const sortedCountriesList = [...visibleCountriesList];

    if (sortCountriesNameASC) {
      sortedCountriesList.sort((a, b) => {
        const aElem = a.Country;
        const bElem = b.Country;

        return bElem.localeCompare(aElem);
      });
    }

    if (!sortCountriesNameASC) {
      sortedCountriesList.reverse();
    }

    setVisibleCountriesList(sortedCountriesList);
    setSortCountriesNametASC(!sortCountriesNameASC);
  };

  const sortByConfirmed = () => {
    const sortedCountriesList = [...visibleCountriesList];

    sortedCountriesList.sort((a, b) => {
      const aElem = a.TotalConfirmed;
      const bElem = b.TotalConfirmed;

      return aElem - bElem;
    });

    if (sortConfirmedASC) {
      sortedCountriesList.sort((a, b) => {
        const aElem = a.TotalConfirmed;
        const bElem = b.TotalConfirmed;

        return aElem - bElem;
      });
    }

    if (!sortConfirmedASC) {
      sortedCountriesList.reverse();
    }

    setVisibleCountriesList(sortedCountriesList);
    setSortConfirmedASC(!sortConfirmedASC);
  };

  const setHidden = () => {
    document.body.style.overflow = 'hidden';
  };

  return (
    <ul className="table">
      <li key="header" className="table__head table__row">
        <div className="table__col-1">№</div>
        <div
          className="table__col-2 table__col-2--head"
          role="presentation"
          onClick={sortByCountry}
        >
          Country
        </div>
        <div
          className="table__col-3"
          role="presentation"
          onClick={sortByConfirmed}
        >
          Total Confirmed
        </div>
      </li>

      {visibleCountriesList.map((country, index) => (
        <li
          key={country.Country}
          className="table__row"
          role="presentation"
          onClick={() => {
            selectCountry(country.Country);
            setHidden();
          }}
        >
          <div className="table__col-1">{index + 1}</div>
          <div className="table__col-2">{country.Country}</div>
          <div className="table__col-3">{country.TotalConfirmed}</div>

        </li>
      ))}
    </ul>
  );
};
