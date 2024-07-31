import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface GridCountryProps {
  data: Country[];
}

type Country = {
  // define the properties of the Country type
  name: string;
  code: string;
  continent: any;
};

const GridCountry = (props: GridCountryProps) => {
  const { data } = props;

  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-x-4 gap-y-6">
      {data.map((country: Country) => (
        <div className="flex justify-center items-center">
          <Link to={`/country/${country.code}`}>
            <Button variant="outlined" color="inherit" className="w-56 h-56">
              <div className="flex flex-col p-6 justify-center items-center ">
                <img
                  src={`https://flagcdn.com/256x192/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  className="w-20 h-30"
                />

                <Typography className="w-40">
                  {country.name} - {country.continent.name}
                </Typography>
              </div>
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GridCountry;
