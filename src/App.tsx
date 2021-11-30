import React from "react";

import "./App.scss";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

import ThemeConfig from "./components/Themes/ThemeConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Ejemplo from "./components/Ejemplo/Ejemplo";
import EjemploL from "./components/EjemploL/EjemploL";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import Blackboard from "./components/Blackboard/Blackboard";

const inputGlobalStyles = <GlobalStyles styles={{}} />;

type AppContainerType = {
  children?: React.ReactChild | React.ReactChild[];
};
const AppContainer: React.FC<AppContainerType> = ({ children }) => {
  return <div className="App">{children}</div>;
};

function App() {
  console.log("Render app");
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      {inputGlobalStyles}
      <BrowserRouter>
        <Routes>
        <Route
            path="/Blackboard"
            element={
              <AppContainer>
                <Blackboard />
              </AppContainer>
            }
            />
        <Route
            path="/StudentProfile"
            element={
              <AppContainer>
                <StudentProfile />
              </AppContainer>
            }
            />
        <Route
            path="/ejemploL"
            element={
              <AppContainer>
                <EjemploL />
              </AppContainer>
            }
            />
        <Route
            path="/ejemplo"
            element={
              <AppContainer>
                <Ejemplo />
              </AppContainer>
            }
          />
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
    </ThemeProvider>
  );
}

export default App;
