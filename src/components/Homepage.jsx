import { useState } from "react";
import StyledButton from "./shared/Button";
import { Container } from "@mui/material";
import { diet } from "../consts/diet";

const Homepage = () => {
  const [days] = useState(diet);

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
