import React from "react";

import "./App.scss";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

import ThemeConfig from "./components/Themes/ThemeConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const inputGlobalStyles = <GlobalStyles styles={{}} />;
function AppContainer(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      {inputGlobalStyles}
      <div className="App">{props.children}</div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AppContainer>
              <Login />
            </AppContainer>
          }
        />
        <Route
          path="/"
          element={
            <AppContainer>
              <Home />
            </AppContainer>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
