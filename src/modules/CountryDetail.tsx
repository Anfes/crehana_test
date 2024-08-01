import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "../queries";



interface Country {
  code: string;
  name: string;
  currency: string;
  continent: {
    name: string;
  };
  languages: {
    name: string;
  }[];
  capital: string;
}

const CountryDetail: React.FC = () => {
  const { code } = useParams<{ code: string }>();

  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
    skip: !code 
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL error:", error); // Detalle del error en la consola
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.country) {
    console.error("Data received:", data); // Verifica qué datos se reciben
    return <p>No country found</p>;
  }

  const country: Country = data.country;

  return (
    <div>
      <h2>{country.name}</h2>
      <p><strong>Code:</strong> {country.code}</p>
      <p><strong>Currency:</strong> {country.currency}</p>
      <p><strong>Continent:</strong> {country.continent.name}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Languages:</strong> {country.languages.map(lang => lang.name).join(", ")}</p>
    </div>
  );
};

export default CountryDetail;