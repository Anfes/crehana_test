import React, { useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries";
import GridCountry from "./modules/GridCountry";
import Filters from "./modules/Filters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./modules/CountryDetail";

interface Country {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
  currency: string;
}

interface GetCountriesData {
  countries: Country[];
}

const App: React.FC = () => {
  const { loading, error, data } = useQuery<GetCountriesData>(GET_COUNTRIES);
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("");
  const [currency, setCurrency] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const countries: Country[] = data?.countries || [];

  const continents: string[] = Array.from(
    new Set(countries.map((country: Country) => country.continent.name))
  );
  const currencies: string[] = Array.from(
    new Set(countries.map((country: Country) => country.currency))
  );

  const filteredCountries = countries.filter((country: Country) => {
    return (
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (continent ? country.continent.name === continent : true) &&
      (currency ? country.currency === currency : true)
    );
  });

  return (
    <Router>
      <div>
        <h1>Countries</h1>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Filters
                  search={search}
                  setSearch={setSearch}
                  continent={continent}
                  setContinent={setContinent}
                  currency={currency}
                  setCurrency={setCurrency}
                  continents={continents}
                  currencies={currencies}
                />
                <GridCountry data={filteredCountries} />
              </div>
            }
          />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
