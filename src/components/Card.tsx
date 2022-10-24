import styled from "@emotion/styled";
import React, { useState } from "react";
import Study from "../assets/icon-study.svg";
import Work from "../assets/icon-work.svg";
import Play from "../assets/icon-play.svg";
import Exercise from "../assets/icon-exercise.svg";
import Social from "../assets/icon-social.svg";
import SelfCare from "../assets/icon-selfcare.svg";
import SVG from "react-inlinesvg";

type ColorProps = {
  Work: string;
  Play: string;
  Study: string;
  Exercise: string;
  Social: string;
  SelfCare: string;
};

const COLORS: ColorProps = {
  Work: "hsl(15, 100%, 70%)",
  Play: "hsl(195, 74%, 62%)",
  Study: "hsl(348, 100%, 68%)",
  Exercise: "hsl(145, 58%, 55%)",
  Social: "hsl(264, 64%, 52%)",
  SelfCare: "hsl(43, 84%, 65%)",
};

interface CardProps {
  title: string;
  timeframes: {
    current: number;
    previous: number;
  };
  time: string;
}

const PRIMARY_COLOR = "#1D204B";
const BORDER_RADIUS = "20px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 250px;
  border-radius: ${BORDER_RADIUS};
  background-color: ${(props) => COLORS[props.color as keyof ColorProps]};
  position: relative;

  @media (max-width: 500px) {
    width: 350px;
    height: 180px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  border-radius: ${BORDER_RADIUS};
  background-color: ${PRIMARY_COLOR};
  bottom: 0;
  position: absolute;

  &:hover {
    background-color: #1d304b;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const StyledIMG = styled(SVG)`
  z-index: 0;
  right: 20px;
  position: absolute;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Time = styled.div`
  font-size: 48px;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 32px;
    font-weight: 300;
    width: 100%;
    align-self: center;
  }
`;
const TimeSpan = styled.div`
  opacity: 0.5;
  font-weight: 300;

  @media (max-width: 500px) {
    width: 100%;
    white-space: nowrap;
    text-align: center;
    align-self: center;
  }
`;

const Timer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function Card({ title, timeframes, time }: CardProps) {
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
        <Text>
          <Title>{title}</Title>
          <Timer>
            <Time>{timeframes.current}hrs</Time>
            <TimeSpan>
              Last {time} - {timeframes.previous}hrs
            </TimeSpan>
          </Timer>
        </Text>
      </Content>
    </Container>
  );
}

export default Card;
