import { useEffect, useState } from "react";
import "./App.css";
import photo from "./img/photo.jpg";
import naMedida from "./img/na-medida.png";
import genius from "./img/genius.png";
import kenzieHub from "./img/kenzie-hub.png";
import kenzieShop from "./img/kenzie-shop.png";
import megabyteShop from "./img/megabyte-shop.png";

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
  ProjectList,
  ProjectCard,
} from "./style";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
  const [title, setTitle] = useState("Escolha sua opção:");

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
              <MainTitle>{title}</MainTitle>
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
                        setTitle("Sobre mim:");
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
                        setTitle("Projetos:");
                      }, 1000);
                    }}
                  >
                    Projetos
                  </Btn>
                </ButtonContainer>
              )}
              {!showBC && (
                <OptionContainer>
                  {showBio && (
                    <p>
                      Olá, meu nome é Fidel Marques, tenho 24 anos e sou natural
                      de Juiz de Fora - MG. Atualmente sou Desenvolvedor Front
                      End, graduando em Engenharia Elétrica - Habilitação em
                      Sistemas Eletrônicos pela UFJF e Desenvolvedor Back End em
                      formação pela Kenzie Academy Brasil.
                    </p>
                  )}
                  {showProjects && (
                    <ProjectList>
                      <ProjectCard>
                        <img src={naMedida} alt="Screenshot Na Medida" />
                        <span>Na Medida</span>
                        <div>
                          <a
                            href="https://github.com/Projeto-Final-Na-medida-Atelie/na-medida-atelie"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size="2rem" />
                          </a>
                          <a
                            href="https://projeto-na-medida.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt size="2rem" />
                          </a>
                        </div>
                      </ProjectCard>
                      <ProjectCard>
                        <img src={kenzieShop} alt="Screenshot Kenzie Shop" />
                        <span>Kenzie Shop (Context API)</span>
                        <div>
                          <a
                            href="https://github.com/fidelmarques/kenzie-shop-contextapi"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size="2rem" />
                          </a>
                          <a
                            href="https://kenzie-shop-mauve.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt size="2rem" />
                          </a>
                        </div>
                      </ProjectCard>
                      <ProjectCard>
                        <img src={kenzieShop} alt="Screenshot Kenzie Shop" />
                        <span>Kenzie Shop (Redux)</span>
                        <div>
                          <a
                            href="https://github.com/fidelmarques/kenzieshop-redux"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size="2rem" />
                          </a>
                          <a
                            href="https://react-entrega-s3-kenzieshop-fidelmarques-git-main-fidelmarques.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt size="2rem" />
                          </a>
                        </div>
                      </ProjectCard>
                      <ProjectCard>
                        <img src={kenzieHub} alt="Screenshot Kenzie Hub" />
                        <span>Kenzie Hub</span>
                        <div>
                          <a
                            href="https://github.com/fidelmarques/kenzie-hub"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size="2rem" />
                          </a>
                          <a
                            href="https://react-entrega-s2-kenzie-hub-fidelmarques-fidelmarques.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt size="2rem" />
                          </a>
                        </div>
                      </ProjectCard>
                      <ProjectCard>
                        <img src={genius} alt="Screenshot Genius Game" />
                        <span>Genius Game</span>
                        <div>
                          <a
                            href="https://github.com/fidelmarques/genius-game"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size="2rem" />
                          </a>
                          <a
                            href="https://fidelmarques.github.io/genius-game/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt size="2rem" />
                          </a>
                        </div>
                      </ProjectCard>
                      <ProjectCard>
                        <img
                          src={megabyteShop}
                          alt="Screenshot Megabyte Shop"
                        />
                        <span>Megabyte Shop</span>
                        <div>
                          <a
                            href="https://github.com/fidelmarques/megabyte-shop"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size="2rem" />
                          </a>
                          <a
                            href="https://fidelmarques.github.io/megabyte-shop/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt size="2rem" />
                          </a>
                        </div>
                      </ProjectCard>
                    </ProjectList>
                  )}
                  <Btn
                    onClick={() => {
                      setShowOption(false);
                      setShowBC(true);
                      setTitle("Escolha sua opção:");
                    }}
                  >
                    Voltar
                  </Btn>
                </OptionContainer>
              )}
              <SocialContainer>
                <a
                  href="https://github.com/fidelmarques"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type="github">
                    <FaGithub size="2rem" />
                    <span>GitHub</span>
                  </SocialIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/fidelmarques/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type="linkedin">
                    <FaLinkedinIn size="2rem" />
                    <span>LinkedIn</span>
                  </SocialIcon>
                </a>
              </SocialContainer>
            </AMMain>
          )}
        </AboutMeContainer>
      )}
    </HomeBG>
  );
}

export default App;
