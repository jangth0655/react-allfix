import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";
import { darkTheme, GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
