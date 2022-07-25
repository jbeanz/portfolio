import React from "react";
import { Button, Col, Row, Stack, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../App.css";
import styled from "styled-components";

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

const AwardCard = () => {
  return (
    <section className="curve2-divider">
      <StyledRow color={"black"} background={"peach"}>
        <h1 className="portfolio">AWARDS</h1>
        <p>won over $10,000 in awards and grants</p>
        <Col>
          <img
            src="./images/award-icon.png"
            alt="award-icon"
            style={{ width: "5rem" }}
          />
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
  );
};
export default AwardCard;
