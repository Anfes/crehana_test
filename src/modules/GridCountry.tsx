import { Button, Typography } from "@mui/material";
import React from "react";

const GridCountry = () => {
  return (
    <div>
      <Button variant="outlined" color="inherit">
        <div className="flex flex-col bg-orange-600">
          <img
            src="https://media.istockphoto.com/id/967985756/es/vector/afganist%C3%A1n-bandera-vector-icono-plana.jpg?s=612x612&w=0&k=20&c=QNWakuiQGHj4nvbP4vQ2OgOucqfj07iKJNaJjH8yY1M="
            alt="Afghanistan"
          />
          <Typography  className=" text-red-600" >Afghanistan</Typography>
        </div>
      </Button>
    </div>
  );
};

export default GridCountry;
