import React from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries";
import GridCountry from "./modules/GridCountry";


interface Country {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
}

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Countries</h1>
      <div>
        <GridCountry />
      </div>
      {/* <ul>
        {data.countries.map((country: Country) => (
          <li key={country.code}>
            {country.name} {country.emoji} - {country.continent.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
