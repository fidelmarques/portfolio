import styled from "styled-components";
import arrow from "./img/arrow.svg";

export const HomeBG = styled.div`
  height: 94vh;
  padding: 3vh 1rem;
  background-color: #feddbc;
`;

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: "PixelOperatorBold";
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  max-width: fit-content;
  font-size: 5rem;
  animation: ${(props) => props.animation && "translateTitle 1s linear"};
  color: #8f755b;
`;

export const HeaderText = styled.h2`
  max-width: fit-content;
  font-size: 3.5rem;
  animation: blink 1.5s linear infinite;
  animation: ${(props) => props.animation && "translateText 1s linear"};
  color: #181818;
  cursor: pointer;

  &:hover {
    animation: ${(props) =>
      props.animation ? "translateText 1s linear" : "unset"};
    color: #52ba5e;
  }
`;

export const Char = styled.span`
  animation: blink 1s linear infinite;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8vh;
`;

export const AMHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 350px;
`;

export const AMText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.5s linear;
`;

export const AMTitle = styled.h1`
  font-size: 5rem;
  text-align: left;
  font-family: "PixelOperatorBold";
  max-width: 386px;
  color: #8c7bb3;
`;

export const AMDescription = styled.h2`
  font-size: 1.5rem;
  max-width: 512px;
  flex: 2;
  display: flex;
  align-items: center;
  color: #8f755b;
`;

export const AMIcons = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  color: #c2b3e6;
  animation: fadeIn 0.5s linear;
`;

export const AMImg = styled.div`
  width: 30%;
  overflow: hidden;
  text-align: center;
  animation: fadeIn 0.5s linear;

  img {
    height: 300px;
    border-radius: 100%;
    box-shadow: 2px 2px 5px #8c7bb3;
    animation: translateImg linear 5s infinite;
  }
`;

export const AMMain = styled.div`
  height: calc(86vh - 350px);
  display: flex;
  flex-direction: column;
  gap: 2vh;
  animation: fadeIn 0.5s linear;
`;

export const MainTitle = styled.div`
  font-size: 4rem;
  font-family: "PixelOperatorBold";
  text-align: center;
  color: #548b7f;
`;

export const ButtonContainer = styled.ul`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Btn = styled.li`
  font-family: "PixelOperatorBold";
  font-size: 3rem;
  color: #8f755b;
  height: 80px;
  padding: 5px;
  text-align: center;
  list-style: none;

  &:hover {
    color: #181818;
    cursor: pointer;
    text-decoration: underline;
    list-style: outside url(${arrow});
  }
`;
