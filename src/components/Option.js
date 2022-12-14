import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > svg {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    size: 1.5rem;
    stroke: ${props => props.theme.colors.neutrals[100]};
  }

  p {
    margin-right: 1rem;
  }

  font-size: 1rem;
  color: ${props => props.theme.colors.neutrals[100]};
`;

const Option = ({ icon, label, children }) => {
  return (
    <Container>
      {icon}
      <p>{label}</p>
      {children}
    </Container>
  );
};

export default Option;
