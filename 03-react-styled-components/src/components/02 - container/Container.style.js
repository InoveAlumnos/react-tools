import styled from "styled-components";
import { theme } from "../common/theme.style"

export const Wrapper = styled.div`
background: ${theme.background || "cornflowerblue"};
font-family: ${theme.defaultFont};
text-align: center;
color: ${theme.redColor};
width:100vmax;
height: 100vh;
`;

export const CardContainer = styled.div`
background: ${theme.darkGrayBG || "cornflowerblue"};
display: flex;
gap: 40px;
margin-left: 100px;
margin-right: 100px;
padding: 40px;
border-radius: 15px;
flex-direction: row;
align-items: center;
justify-content: center;
box-shadow: 10px 10px 28px 1px rgba(0,0,0,0.53);
-webkit-box-shadow: 10px 10px 28px 1px rgba(0,0,0,0.53);
-moz-box-shadow: 10px 10px 28px 1px rgba(0,0,0,0.53);
`;

export const Card = styled.div`
background: ${theme.whiteBG || "cornflowerblue"};
color: ${theme.color};
width: 200px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
box-shadow: 10px 10px 28px 1px rgba(0,0,0,0.53);
-webkit-box-shadow: 10px 10px 28px 1px rgba(0,0,0,0.53);
-moz-box-shadow: 10px 10px 28px 1px rgba(0,0,0,0.53);
`;