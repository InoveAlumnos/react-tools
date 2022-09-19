import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => props.bgColor ||'orange'};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  display: block;
`;