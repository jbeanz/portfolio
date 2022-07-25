import React from "react";
import { Button, Col, Row, Stack, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../App.css";
import styled from "styled-components";

interface Props {
  data: any;
}

const StyledCard = styled(Card)`
  color: black;
  background: white;
  padding: 1rem;
  width: 40vw;
  .warning {
    color: red;
  }
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const PortfolioCard = ({ data }: Props) => {
  return (
    <StyledCard key={data.id}>
      <StyledCard.Img variant="top" src={data.img} alt={data.name} />
      <StyledCard.Body d-flex flex-column>
        <StyledCard.Title>{data.name}</StyledCard.Title>
        <StyledCard.Text>{data.desc}</StyledCard.Text>
        {data.req ? (
          <StyledCard.Text className="warning">{data.req}</StyledCard.Text>
        ) : null}
        <FlexContainer>
          <Button
            href={data.url}
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Visit website
          </Button>
          <Button
            href={data.github}
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Github Code
          </Button>
        </FlexContainer>
      </StyledCard.Body>
    </StyledCard>
  );
};
export default PortfolioCard;
