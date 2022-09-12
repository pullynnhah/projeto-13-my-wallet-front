import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/GlobalStyle.sc";
import GlobalContext from "./contexts/GlobalContext";
import {getMyWalletUser} from "../services/storage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const [login, setLogin] = useState(getMyWalletUser());
  const [token, setToken] = useState(null);
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
      <GlobalContext.Provider value={{login, setLogin, token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/*<Route path="/my-wallet" element={<MyWallet />} />*/}
            {/*<Route path="/balance/new/:type" element={<NewBalance />} />*/}
            {/*<Route path="/balance/edit/:type" element={<EditBalance />} />*/}
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
