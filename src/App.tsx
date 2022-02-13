import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import CensoredWords from "./views/CensoredWords";
import FlaggedMessages from "./views/FlaggedMessages";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: roboto;
    background-color: #1d1d1d;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<FlaggedMessages />} />
            <Route path="censored-words" element={<CensoredWords />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
