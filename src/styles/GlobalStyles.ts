import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,button{
    font-family: "Manrope", sans-serif;
}
body{
    background: var(--Dark-Blue, #202733);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

`;
