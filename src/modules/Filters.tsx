import React from 'react';

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  continent: string;
  setContinent: (value: string) => void;
  currency: string;
  setCurrency: (value: string) => void;
  continents: string[];
  currencies: string[];
}

const Filters: React.FC<FiltersProps> = ({
  search,
  setSearch,
  continent,
  setContinent,
  currency,
  setCurrency,
  continents,
  currencies,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by country name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="">All Continents</option>
        {continents.map((cont) => (
          <option key={cont} value={cont}>
            {cont}
          </option>
        ))}
      </select>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="">All Currencies</option>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;