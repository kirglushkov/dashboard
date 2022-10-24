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

function App() {
  const [active, setActive] = useState(0);

  function ChangeState(x) {
    setActive(x);
  }

  return (
    <Field>
      <UserCard hook={ChangeState} img={jeremy} name={"Jeremy Floyde"} />
      <Grid>
        {Data.map((item, key) =>
          active === 0 ? (
            <Card
              time={"Day"}
              title={item.title}
              timeframes={item.timeframes.daily}
              key={key}
            />
          ) : active === 1 ? (
            <Card
              time={"Week"}
              title={item.title}
              timeframes={item.timeframes.weekly}
              key={key}
            />
          ) : (
            <Card
              time={"Month"}
              title={item.title}
              timeframes={item.timeframes.monthly}
              key={key}
            />
          )
        )}
      </Grid>
    </Field>
  );
}

export default App;
