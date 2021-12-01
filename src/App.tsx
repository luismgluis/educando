import React, { useMemo } from "react";
import "./App.css";
import ThemeConfig from "./components/theme/ThemeConfig";
//import { ThemeProvider } from "@emotion/react";
//import { CssBaseline } from "@mui/material";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";

import "./App.scss";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

//import ThemeConfig from "./components/Themes/ThemeConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import Home from "./components/Home/Home";
//import Login from "./components/Login/Login";
//import Ejemplo from "./components/Ejemplo/Ejemplo";
import EjemploL from "./components/EjemploL/EjemploL";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import Blackboard from "./components/Blackboard/Blackboard";

const inputGlobalStyles = <GlobalStyles styles={{}} />;

type AppContainerType = {
  children?: React.ReactChild | React.ReactChild[];
};
const AppContainer: React.FC<AppContainerType> = ({ children }) => {
  return <div className="App">{children}</div>;
type RoutesType = {
  path: string;
  element: JSX.Element;
};

function App() {
  const routes = useMemo(() => {
    const arr: RoutesType[] = [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/loginCreate",
        element: <Login enableCreate />,
      },
      {
        path: "/",
        element: <Login />,
      },
    ];
    return arr.map((item, index) => {
      return (
        <Route
          key={`RouteApp${index}`}
          path={item.path}
          element={
            <PrivateRoute
              path={item.path}
              blockRedirect={
                item.path === "/login" || item.path === "/loginCreate"
              }
            >
              {item.element}
            </PrivateRoute>
          }
        />
      );
    });
  }, []);
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
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
        {/* <Route
            path="/ejemplo"
            element={
              <AppContainer>
                <Ejemplo />
              </AppContainer>
            }
          /> */}
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
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
}
export default App;
