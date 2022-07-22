import { useState } from "react";
import "./App.css";
import photo from "./img/photo.jpg";
import {
  HomeBG,
  HeaderTitle,
  HomeContainer,
  HeaderText,
  AboutMeContainer,
  AMHeader,
  AMTitle,
  AMImg,
  AMText,
  AMDescription,
  Char,
  AMMain,
  ButtonContainer,
  MainTitle,
  AMIcons,
  Btn,
} from "./style";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showAM, setShowAM] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [animation, setAnimation] = useState(false);

  const start = () => {
    setAnimation(true);
    setTimeout(() => {
      setShowHome(false);
      setShowAM(true);
    }, 1000);
    setTimeout(() => {
      setShowText(true);
    }, 1500);
    setTimeout(() => {
      setShowImg(true);
    }, 2000);

    setTimeout(() => {
      setShowMenu(true);
    }, 2500);
  };

  return (
    <HomeBG>
      {showHome && (
        <HomeContainer>
          <HeaderTitle animation={animation}>Seja bem vindo(a)!</HeaderTitle>
          <HeaderText animation={animation} onClick={start}>
            Começar
          </HeaderText>
        </HomeContainer>
      )}
      {showAM && (
        <AboutMeContainer>
          <AMHeader>
            {showText && (
              <AMText>
                <AMTitle>Dev</AMTitle>
                <AMTitle>
                  Front End<Char>_</Char>
                </AMTitle>
                <AMDescription>
                  Olá! Eu sou o Fidel, desenvolvedor Front End e estudante de
                  Full Stack.
                </AMDescription>
                <AMIcons>
                  <SiHtml5 size="3rem" />
                  <SiCss3 size="3rem" />
                  <SiJavascript size="3rem" />
                  <SiReact size="3rem" />
                  <SiStyledcomponents size="3rem" />
                  <SiRedux size="3rem" />
                </AMIcons>
              </AMText>
            )}
            {showImg && (
              <AMImg>
                <img src={photo} alt="Foto" />
              </AMImg>
            )}
          </AMHeader>
          {showMenu && (
            <AMMain>
              <MainTitle>Escolha sua opção:</MainTitle>
              <ButtonContainer>
                <Btn>Sobre mim</Btn>
                <Btn>Projetos</Btn>
              </ButtonContainer>
            </AMMain>
          )}
        </AboutMeContainer>
      )}
    </HomeBG>
  );
}

export default App;
