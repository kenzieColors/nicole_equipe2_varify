import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  :root{
    --color-brand-1: #80cbc4;
    --color-brand-2: #ffb300;
    --color-brand-3: #cddc39;
    --color-brand-4: #ef6c00;

    --color-sec-blue: #bfe1cd;
    --color-sec-yellow: #ffdb87;
    --color-sec-green: #e4e488;
    --color-sec-orange: #f7b37b;

    --color-sucess: #168821;
    --color-warning: #ffcd07;
    --color-inform: #155bcb;
    --color-negative: #e60000;

    --grey-100: #121212;
    --grey-200: #282828;
    --grey-300: #3f3f3f;
    --grey-400: #575757;
    --grey-500: #717171;
    --grey-600: #8b8b8b;
    --grey-0: #F8F9FA;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 500;
    --font-weight-4: 400;

    --radius-default: 4px;
  }

  button{
    cursor: pointer;
  }
`;