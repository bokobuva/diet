/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { diet } from "../consts/diet";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params.dayIndex && params.mealIndex) {
      setRecipe(diet[params.dayIndex].meals[params.mealIndex]);
    }
  }, [params]);
  return (
    <Container
      sx={{
        "li::marker": {
          color: "gray",
        },
      }}
    >
      <h5 style={{ color: "#7e7e7e" }}>{recipe?.category}</h5>
      <h3>{recipe?.title}</h3>
      <hr />
      <h4>Состојки</h4>
      <ol style={{ display: "flex", flexDirection: "column" }}>
        {recipe?.ingredients?.length > 0 &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ol>
      <hr />
      <h4>Упатство</h4>
      <ol style={{ display: "flex", flexDirection: "column" }}>
        {recipe?.instructions?.length > 0 &&
          recipe.instructions.map((instruction_step, index) => (
            <li key={index}>{instruction_step}</li>
          ))}
      </ol>
    </Container>
  );
};

export default Recipe;
