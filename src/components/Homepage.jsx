import { useEffect, useState } from "react";
import StyledButton from "./shared/Button";
import { Container } from "@mui/material";

const Homepage = () => {
  const [days, setDays] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/dieta.json");
        const data = await response.json();
        setDays(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {days?.length > 0 &&
          days.map((day, index) => (
            <StyledButton
              text={day.title}
              href={`/day/${index}`}
              variant="contained"
              key={index}
            />
          ))}
      </ul>
    </Container>
  );
};

export default Homepage;
