import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul, li {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
}

body {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
}

:root {
    /* Background Color */
    --light-color: #E6EBF4;
    --dark-color: #181823;
    --vintage-color: #F2D8D8;
    --warm-color: #FFF2D7;

    /* Button Color */
    --light-button: #DFDDF3;
    --dark-button: #FFD1E3;             
    --vintage-button: #374259;
    --warm-button: #6F4E37;
    
    /* Font Color */
    --black-color: #111111;
    --white-color: #ffffff;    
}
`;

export default GlobalStyles;
