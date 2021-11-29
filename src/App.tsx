import React, { useMemo } from "react";
import "./App.css";
import ThemeConfig from "./components/theme/ThemeConfig";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";

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
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
