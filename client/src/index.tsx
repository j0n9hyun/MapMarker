import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
    ${reset}
    * {
      box-sizing: border-box;
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
