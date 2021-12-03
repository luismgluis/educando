import React, { useMemo } from "react";
import "./App.css";
import ThemeConfig from "./components/theme/ThemeConfig";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import CustomersScreen from "./components/screens/CustomersScreen/CustomersScreen";
import BusinessScreen from "./components/screens/BusinessScreen/BusinessScreen";
import StudentsScreen from "./components/screens/StudentsScreen/StudentsScreen";
import TeachersScreen from "./components/screens/TeacherScreen/TeachersScreen";
import StudentProfile from "./components/screens/StudentProfile/StudentProfile";
import InstitutionProfile from "./components/screens/InstitutionProfile/InstitutionProfile";
import TeacherProfile from "./components/screens/TeacherProfile/TeacherProfile";
import ClassesScreen from "./components/screens/ClassesScreen/ClassesScreen";

type RoutesType = {
  path: string;
  element: JSX.Element;
  private: boolean;
};

function App() {
  const routes = useMemo(() => {
    const arr: RoutesType[] = [
      {
        path: "/classes",
        element: <ClassesScreen />,
        private: false,
      },
      {
        path: "/teacherProfile",
        element: <TeacherProfile />,
        private: false,
      },
      {
        path: "/institutionProfile",
        element: <InstitutionProfile />,
        private: false,
      },
      {
        path: "/studentProfile",
        element: <StudentProfile />,
        private: false,
      },
      {
        path: "/students",
        element: <StudentsScreen />,
        private: false,
      },
      {
        path: "/teachers",
        element: <TeachersScreen />,
        private: false,
      },
      {
        path: "/customers",
        element: <CustomersScreen />,
        private: false,
      },
      {
        path: "/business",
        element: <BusinessScreen />,
        private: false,
      },
      {
        path: "/home",
        element: <Home />,
        private: false,
      },
      {
        path: "/login",
        element: <Login />,
        private: true,
      },
      {
        path: "/loginCreate",
        element: <Login enableCreate />,
        private: true,
      },
      {
        path: "/",
        element: <Login />,
        private: true,
      },
    ];
    return arr.map((item, index) => {
      const ele = item.private ? (
        <PrivateRoute
          path={item.path}
          blockRedirect={item.path === "/login" || item.path === "/loginCreate"}
        >
          {item.element}
        </PrivateRoute>
      ) : (
        item.element
      );
      return <Route key={`RouteApp${index}`} path={item.path} element={ele} />;
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
