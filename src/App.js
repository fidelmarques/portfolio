import { useEffect, useState } from "react";
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
  AMTechnology,
  VoltarHome,
  OptionContainer,
  SocialContainer,
  SocialIcon,
} from "./style";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showAM, setShowAM] = useState(false);
  const [showBC, setShowBC] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const [tech, setTech] = useState("");
  const [cl, setCl] = useState("");
  const [animate, setAnimate] = useState("");

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
      setShowMenu(true);
    }, 2000);

    setTimeout(() => {
      setShowImg(true);
    }, 3000);
  };

  const showTech = (str) => {
    setTech(str);
  };

  const techSelector = () => {
    switch (tech) {
      case "HTML5":
        return "orange";
      case "CSS3":
        return "darkBlue";
      case "Javascript":
        return "yellow";
      case "React":
        return "lightBlue";
      case "Styled Components":
        return "pink";
      case "Redux":
        return "purple";
      default:
        return tech;
    }
  };

  useEffect(() => {
    setCl(techSelector());
  }, [tech]);

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
        <AboutMeContainer opt={showOption}>
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
                  <SiHtml5
                    cursor="pointer"
                    size="3rem"
                    className="icon html5"
                    onMouseOver={() => showTech("HTML5")}
                    onMouseLeave={() => setTech("")}
                  />
                  <SiCss3
                    cursor="pointer"
                    size="3rem"
                    className="icon css3"
                    onMouseOver={() => showTech("CSS3")}
                    onMouseLeave={() => setTech("")}
                  />
                  <SiJavascript
                    cursor="pointer"
                    size="3rem"
                    className="icon js"
                    onMouseOver={() => showTech("Javascript")}
                    onMouseLeave={() => setTech("")}
                  />
                  <SiReact
                    cursor="pointer"
                    size="3rem"
                    className="icon react"
                    onMouseOver={() => showTech("React")}
                    onMouseLeave={() => setTech("")}
                  />
                  <SiStyledcomponents
                    cursor="pointer"
                    size="3rem"
                    className="icon sc"
                    onMouseOver={() => showTech("Styled Components")}
                    onMouseLeave={() => setTech("")}
                  />
                  <SiRedux
                    cursor="pointer"
                    size="3rem"
                    className="icon redux"
                    onMouseOver={() => showTech("Redux")}
                    onMouseLeave={() => setTech("")}
                  />
                </AMIcons>
                <AMTechnology className={cl}>{tech}</AMTechnology>
              </AMText>
            )}
            {showImg && <AMImg src={photo} />}
          </AMHeader>
          {showMenu && (
            <AMMain>
              <MainTitle>Escolha sua opção:</MainTitle>
              {showBC && (
                <ButtonContainer opt={showOption} animation={animate}>
                  <Btn
                    onClick={() => {
                      setShowOption(true);
                      setAnimate("left");
                      setTimeout(() => {
                        setShowBC(false);
                        setShowBio(true);
                        setShowProjects(false);
                      }, 1000);
                    }}
                  >
                    Sobre mim
                  </Btn>
                  <Btn
                    onClick={() => {
                      setShowOption(true);
                      setAnimate("right");
                      setTimeout(() => {
                        setShowBC(false);
                        setShowProjects(true);
                        setShowBio(false);
                      }, 1000);
                    }}
                  >
                    Projetos
                  </Btn>
                </ButtonContainer>
              )}
              {!showBC && (
                <OptionContainer>
                  {showBio && "Bio"}
                  {showProjects && "Projetos"}
                  <Btn
                    onClick={() => {
                      setShowOption(false);
                      setShowBC(true);
                    }}
                  >
                    Voltar
                  </Btn>
                </OptionContainer>
              )}
              <SocialContainer>
                <SocialIcon type="github">
                  <FaGithub size="2rem" />
                </SocialIcon>
                <SocialIcon type="linkedin">
                  <FaLinkedinIn size="2rem" />
                </SocialIcon>
              </SocialContainer>
            </AMMain>
          )}
        </AboutMeContainer>
      )}
    </HomeBG>
  );
}

export default App;
