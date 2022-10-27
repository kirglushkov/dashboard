import { useState } from "react";

import styled from "@emotion/styled";
import Card from "./components/Card";
import UserCard from "./components/UserCard";
import jeremy from "./assets/image-jeremy.png";

const Field = styled.div`
  margin: 0 auto;
  color: white;
  flex: 0;
  display: flex;
  width: 1440px;
  gap: 20px;
  height: 1024px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex: 0;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

import Data from "../data.json";

type ObjectType = {
  daily: {
    current: string;
    previous: string;
  };
  weekly: {
    current: string;
    previous: string;
  };
  monthly: {
    current: string;
    previous: string;
  };
};

function App() {
  const [active, setActive] = useState("daily");

  function ChangeState(x: string) {
    setActive(x);
  }

  return (
    <Field>
      <UserCard hook={ChangeState} img={jeremy} name={"Jeremy Floyde"} />
      <Grid>
        {Data.map((item, key) => (
          <Card
            time={
              active === "daily"
                ? "Day"
                : active === "weekly"
                ? "Week"
                : "Month"
            }
            title={item.title}
            timeframes={item.timeframes[active as keyof ObjectType]}
            key={key}
          />
        ))}
      </Grid>
    </Field>
  );
}

export default App;
