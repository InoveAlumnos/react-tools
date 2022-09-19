import styled from "styled-components"
import BaseComponent from "./MyComponent";

export const MyComponent = styled(BaseComponent)`
    background: radial-gradient(
        circle,
        rgba(251,151,63,1) 0%,
        rgba(252,70,107,1) 100%
        );
    color: white;
    border-radius: 15px;
    border: 1px solid #444444;
    font-size: 20px;
    padding: 20px;

    /* También funciona con reglas anidadas: */
    &:hover{
        background: linear-gradient(
            90deg,
            rgba(219,105,49,1) 0%,
            rgba(207,43,215,1) 100%
            );
    }
    /* también con los selectores: */
    /* > h1 {
        color:red;
    } */
`;
