import React from "react";
import Country from "./Country";

const Countries = ({ countries, handleCountrySelect }) => {
  if (countries.length === 0) return <p>No matches</p>;
  if (countries.length === 1) return <Country country={countries[0]} />;
  if (countries.length > 10)
    return <p>Too many matches, spesify another filter</p>;

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}{" "}
          <button onClick={() => handleCountrySelect(country.name.common)}>
            show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
