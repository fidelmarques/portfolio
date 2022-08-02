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
  justify-content: space-between;
  height: 350px;
  width: 80%;
  align-self: center;
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
  animation: fadeIn 0.25s linear;
  color: #a6a6a6;

  .icon {
    size: 3rem;
    transition: 0.5s;
  }

  .icon:hover {
    transition: 0.5s;
  }
`;

export const AMTechnology = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "PixelOperatorBold";
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px #9d9d9d;
`;

export const AMImg = styled.div`
  height: 290px;
  width: 290px;
  overflow: hidden;
  text-align: center;
  animation: fadeIn 1s linear;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 100%;
  border: 4px solid #a6a6a6;
  box-shadow: 4px 4px 10px #8c7bb3;
  animation: translateImg linear 5s infinite;
  transition: 0.5s;
  filter: grayscale(1);

  :hover {
    transition: 0.5s;
    filter: unset;
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
  align-items: center;
  animation: ${(props) =>
    props.opt &&
    `${
      props.animation === "left" ? "translateLeft" : "translateRight"
    } 1s linear`};
`;

export const Btn = styled.li`
  font-family: "PixelOperatorBold";
  font-size: 3rem;
  color: #8f755b;
  height: 80px;
  text-align: center;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #181818;
    cursor: pointer;
    text-decoration: underline;
    list-style: outside url(${arrow});
  }
`;
export const OptionContainer = styled.div`
  animation: fadein 1s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VoltarHome = styled.div`
  font-family: "PixelOperatorBold";
  font-size: 2rem;
  background-color: #8f755b;
  text-align: center;
  height: 50px;
  width: 100%;
  color: #fafafa;
  cursor: pointer;
`;

export const SocialContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const SocialIcon = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
  z-index: 999;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      (props.type === "github" && "#161B22") ||
      (props.type === "linkedin" && "#0A66C2")};

    svg {
      fill: white;
    }
  }
`;
