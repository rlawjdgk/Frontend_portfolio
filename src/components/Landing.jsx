import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #e6ebf4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.div`
  color: #4e4e4e;
  font-size: 100px;
  font-weight: bold;
`;

const Landing = () => {
  return (
    <Wrapper>
      <Span>PORTFOLIO</Span>
    </Wrapper>
  );
};

export default Landing;
