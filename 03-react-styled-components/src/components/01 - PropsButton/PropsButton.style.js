import styled from "styled-components"

export const Button = styled.button`
  background-color: ${(props) => props.bgColor ||'orange'};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 1px solid ${(props) => props.bgColor ||'orange'};
`;