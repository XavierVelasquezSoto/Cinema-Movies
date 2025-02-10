import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: "Ubuntu", serif;
        margin: 0;
        /* background-color: #070724; */
        background:linear-gradient(to bottom, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 55%, rgba(0, 132, 255, 0.93) 100%);
        min-height:100vh;

        color: aliceblue;
    }
    h1,h2,h3{
        font-weight: 700;
    }
    p{
        font-weight: 300;
    }

`;
