import { createGlobalStyle, ThemeProvider } from "styled-components";
import Chat from "./components/Chat";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: roboto;
    background-color: #1d1d1d;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <div className="App">
        <Chat />
      </div>
    </ThemeProvider>
  );
};

export default App;
