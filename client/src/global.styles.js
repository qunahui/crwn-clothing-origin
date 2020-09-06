import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  /* Customize website's scrollbar like Mac OS
Not supports in Firefox and IE */

  /* total width */
  ::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
    height: 75%;
    background: #fff;
    overflow-y: scroll;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-track:hover {
    background-color: #f4f4f4;
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 5px solid #fff;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
    border: 4px solid #f4f4f4;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }
`;
