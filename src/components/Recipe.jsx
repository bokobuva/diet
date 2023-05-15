/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params.dayIndex && params.mealIndex) {
      const fetchData = async (dayIndex, mealIndex) => {
        try {
          const response = await fetch("/diet.json");
          const data = await response.json();
          console.log(data);
          setRecipe(data[dayIndex].meals[mealIndex]);
        } catch (error) {
          console.error("Error fetching JSON data:", error);
        }
      };

      fetchData(params.dayIndex, params.mealIndex);
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
