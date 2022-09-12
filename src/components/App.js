import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/GlobalStyle.sc";

export default function App() {
  const theme = {
    purple: "#8C11BE",
    violet: "#A328D6",
    green: "#03AC00",
    red: "#C70000",
    gray: "#868686",
    lighGray: "#C6C6C6",
    black: "#000",
    white: "#FFF",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
