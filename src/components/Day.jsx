/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import StyledButton from "./shared/Button";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { diet } from "../consts/diet";

const Day = () => {
  const [day, setDay] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params.dayIndex) {
      setDay(diet[params.dayIndex]);
    }
  }, [params]);
  return (
    <Container>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {day?.meals?.length > 0 &&
          day.meals.map((meal, index) => (
            <StyledButton
              text={meal.category}
              href={`/day/${params.dayIndex}/meal/${index}`}
              variant="contained"
              key={index}
            />
          ))}
      </ul>
    </Container>
  );
};

export default Day;
