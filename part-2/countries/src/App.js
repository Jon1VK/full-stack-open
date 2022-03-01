import { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [nameQuery, setNameQuery] = useState("");

  const handleNameQueryChange = (event) => {
    setNameQuery(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(nameQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Countries App</h1>
      <p>
        find countries{" "}
        <input value={nameQuery} onChange={handleNameQueryChange} />
      </p>

      <Countries
        countries={filteredCountries}
        handleCountrySelect={setNameQuery}
      />
    </div>
  );
};

export default App;
