import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Content = () => {
  const [cocktail, setCocktail] = useState([]);

  const drinkQuery = useQuery({
    queryKey: ["drinks"],
    queryFn: async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=553"
      );
      const data = await response.json();
      // console.log(data.ingredients);
      setCocktail(data);
      return data;
    },
  });

  console.log(cocktail);

  return (
    <Box>
      <Typography sx={{ p: "1.6rem " }}>
        {JSON.stringify(cocktail.ingredients[0].strIngredient)}
      </Typography>
    </Box>
  );
};

export default Content;
