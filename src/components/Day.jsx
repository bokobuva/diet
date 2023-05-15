/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import StyledButton from "./shared/Button";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Day = () => {
  const [day, setDay] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params.dayIndex) {
      const fetchData = async (dayIndex) => {
        try {
          const response = await fetch("/dieta.json");
          const data = await response.json();
          console.log(data);
          setDay(data[dayIndex]);
        } catch (error) {
          console.error("Error fetching JSON data:", error);
        }
      };

      fetchData(params.dayIndex);
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
