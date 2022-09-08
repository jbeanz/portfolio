import "./App.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Button } from "react-bootstrap";
import data from "./data/data.json";
import PortfolioCard from "./components/PortfolioCard";
import styled from "styled-components";
import AwardCard from "./components/AwardCard";

const handleBackground = (background: string) => {
  switch (background) {
    case "peach":
      return "#ff6464";
    case "light":
      return "#fff7e9";
    default:
      return "#483737";
  }
};
const StyledRow = styled(Row)`
  text-align: center;
  padding: 2rem;
  background: ${(p) => handleBackground(p.background)};
  color: ${(p) => (p.color ? p : "white")};
  .SkillsLogo {
    width: 5rem;
  }
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  padding: 2rem 4rem 2rem;
  gap: 1rem;
  justify-content: center;
`;
const VerticalContainer = styled(FlexContainer)`
  flex-direction: column;
`;

function App() {
  return (
    <div className="app">
      <p>PUSH THEN PR TEST MSG </p>
      <div className="spacer-top layer0"></div>
      <StyledRow background={"peach"}>
        <h1 className="nice-curves">JBEANZ</h1>
        <p>frontend dev x design</p>
      </StyledRow>
      <StyledRow background={"peach"}>
        <FlexContainer>
          {data
            ? data.map((portfolio) => <PortfolioCard data={portfolio} />)
            : null}
        </FlexContainer>
      </StyledRow>
      <div className="spacer layer1"></div>
      <StyledRow className="skills">
        <h1 className="portfolio">TOP SKILLS</h1>
        <p>tech stack</p>
      </StyledRow>
      <section className="curve-divider">
        <StyledRow background={"light"}>
          <div className="flex-container">
            <img
              className="SkillsLogo"
              src="https://i.imgur.com/VXfU8X6.png"
              alt="html"
            />
            <img
              className="SkillsLogo"
              src="https://i.imgur.com/0S92Td7.png"
              alt="css"
            />
            <img
              className="SkillsLogo"
              src="https://i.imgur.com/v7wGFls.png"
              alt="js"
            />
            <img
              className="SkillsLogo"
              src="https://i.imgur.com/eKTRzmh.png"
              alt="bootstrap"
            />
            <img
              className="SkillsLogo"
              src="https://i.imgur.com/HJQwz8j.png"
              alt="react"
            />
            <img
              className="SkillsLogo"
              src="https://user-images.githubusercontent.com/102068506/175064231-85d30200-9ea2-4fae-85f1-c10082b66bb7.png"
              alt="graphql"
            />
          </div>
        </StyledRow>
        <div className="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="curve2-divider">
        <StyledRow color={"black"} background={"peach"}>
          <h1 className="portfolio">AWARDS</h1>
          <p>won over $10,000 in awards and grants</p>
          <Col>
            <Col>
              <img
                src="./images/award-icon.png"
                alt="award-icon"
                style={{ width: "5rem", margin: "1rem" }}
              />
            </Col>

            <Button
              href="https://static1.squarespace.com/static/5bb4950851f4d40c36d28c34/t/5bbb2e1a8165f56086f6cc27/1538993691251/JeainnyKim_CV2018.pdf"
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              See full CV here
            </Button>
          </Col>
        </StyledRow>
        <div className="curve2">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <StyledRow background="peach"></StyledRow>
    </div>
  );
}

export default App;
