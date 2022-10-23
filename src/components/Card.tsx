import styled from "@emotion/styled";
import React from "react";

import SVG from "react-inlinesvg";

const COLORS = {
  Work: "hsl(15, 100%, 70%)",
  Play: "hsl(195, 74%, 62%)",
  Study: "hsl(348, 100%, 68%)",
  Exercise: "hsl(145, 58%, 55%)",
  Social: "hsl(264, 64%, 52%)",
  SelfCare: "hsl(43, 84%, 65%)",
};

const PRIMARY_COLOR = "hsl(246, 80%, 60%)";

const BORDER_RADIUS = "20px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border-radius: ${BORDER_RADIUS};
  background-color: ${(props) => COLORS[props.color]};
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${BORDER_RADIUS};
  background-color: ${PRIMARY_COLOR};
  bottom: 0;
  position: absolute;
`;

const StyledIMG = styled(SVG)`
  z-index: 0;
  right: 20px;
  position: absolute;
`;

import Study from "../assets/icon-study.svg";
import Work from "../assets/icon-work.svg";
import Play from "../assets/icon-play.svg";
import Exercise from "../assets/icon-exercise.svg";
import Social from "../assets/icon-social.svg";
import SelfCare from "../assets/icon-selfcare.svg";

function Card({ title, timeframes }) {
  return (
    <Container color={title}>
      <StyledIMG
        src={
          title === "Study"
            ? Study
            : title === "Play"
            ? Play
            : title === "Work"
            ? Work
            : title === "Exercise"
            ? Exercise
            : title === "Social"
            ? Social
            : SelfCare
        }
      />
      <Content>
        <div>{title}</div>
        <div>{timeframes.daily.current}</div>
        <div>week</div>
      </Content>
    </Container>
  );
}

export default Card;
