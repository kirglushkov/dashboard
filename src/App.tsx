import { useState } from "react";

import styled from "@emotion/styled";
import Card from "./components/Card";
import UserCard from "./components/UserCard";

const Div = styled.div`
  margin: 0 auto;
  color: white;
  flex: 0;
  display: flex;
  width: 1440px;
  gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex: 0;
`;

import Data from "../data.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Div>
      <UserCard />
      <Grid>
        {Data.map((item, key) => (
          <Card key={key} {...item} />
        ))}
      </Grid>
    </Div>
  );
}

export default App;
