import React from 'react';

import { Country } from '../../interface/Country';

import confirmedIcon from './confirmed-icon.svg';
import deathsIcon from './deaths-icon.svg';
import recoveredIcon from './recovered-icon.svg';

import './CountryDetails.scss';

type Props = {
  countriesList: Country[],
  selectedCountry: string,
  setSelectedCountry: (arg: null) => void,
};

export const CountryDetails: React.FC<Props> = ({
  countriesList,
  selectedCountry,
  setSelectedCountry,
}) => {
  const selectedCountryData = [...countriesList].find(
    country => country.Country === selectedCountry,
  );

  const setScroll = () => {
    document.body.style.overflow = 'scroll';
  };

  return (
    <div className="modal__body">
      <div className="modal__container">
        <h1 className="modal__title">{selectedCountryData?.Country}</h1>
        <table className="modal__table">
          <tbody className="modal__table-body">
            <tr className="modal__table-row">
              <td className="modal__table-col-1">
                <img
                  className="logo__img"
                  src={confirmedIcon}
                  alt="logo"
                />
              </td>
              <td className="modal__table-col-2">
                Total Confirmed
              </td>
              <td className="modal__table-col-3">
                {selectedCountryData?.TotalConfirmed}
              </td>
            </tr>

            <tr className="modal__table-row">
              <td className="modal__table-col-1">
                <img
                  className="logo__img"
                  src={deathsIcon}
                  alt="logo"
                />
              </td>
              <td className="modal__table-col-2">
                Total Deaths
              </td>
              <td className="modal__table-col-3">
                {selectedCountryData?.TotalDeaths}
              </td>
            </tr>

            <tr className="modal__table-row">
              <td className="modal__table-col-1">
                <img
                  className="logo__img"
                  src={recoveredIcon}
                  alt="logo"
                />
              </td>
              <td className="modal__table-col-2">
                Total Recovered
              </td>
              <td className="modal__table-col-3">
                {selectedCountryData?.TotalRecovered}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="modal__btn"
          type="button"
          onClick={() => {
            setSelectedCountry(null);
            setScroll();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};
