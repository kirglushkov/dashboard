import styled from "@emotion/styled";
import React from "react";

const PRIMARY_COLOR = "#1D204B";

const SECONDARY_COLOR = "hsl(246, 80%, 60%)";

const BORDER_RADIUS = "20px";

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid white;
  margin: 20px;
  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 520px;
  border-radius: ${BORDER_RADIUS};
  background-color: ${PRIMARY_COLOR};

  @media (max-width: 500px) {
    width: 350px;
    height: 200px;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 100%;
  border-radius: ${BORDER_RADIUS};
  background-color: ${SECONDARY_COLOR};

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Report = styled.div`
  color: white;
  font-weight: 300;
  opacity: 0.5;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  width: min-content;

  &:focus {
    opacity: 1;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Text = styled.div`
  margin: 20px;
`;

function UserCard({ img, name, hook }) {
  return (
    <Container>
      <Content>
        <Image src={img}></Image>
        <Text>
          <Report>Report for</Report>
          <Title>{name}</Title>
        </Text>
      </Content>
      <ButtonContent>
        <Button
          onClick={() => {
            hook(0);
          }}
        >
          Daily
        </Button>
        <Button
          onClick={() => {
            hook(1);
          }}
        >
          Weekly
        </Button>
        <Button
          onClick={() => {
            hook(2);
          }}
        >
          Monthly
        </Button>
      </ButtonContent>
    </Container>
  );
}

export default UserCard;
