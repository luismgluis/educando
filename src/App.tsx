import React, { useMemo } from "react";
import "./App.css";
import ThemeConfig from "./components/theme/ThemeConfig";

import { Accordion, CssBaseline, ThemeProvider } from "@mui/material";
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
import CustomAlert from "./components/ui/Alert/CustomAlert";
import SubjectScreen from "./components/screens/SubjectScreen/SubjectScreen";
import CustomAccordion from "./components/ui/CustomAccordion/CustomAccordion";

type RoutesType = {
  path: string;
  element: JSX.Element;
  private: boolean;
};

function App() {
  const routes = useMemo(() => {
    const arr: RoutesType[] = [
      {
        path: "/customAccordion",
        element: <CustomAccordion children={""} />,
        private: false,
      },
      {
        path: "/subjectScreen",
        element: <SubjectScreen />,
        private: false,
      },
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
        private: true,
      },
      {
        path: "/home",
        element: <Home />,
        private: true,
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
          key={`RouteApp${index}`}
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
        <CustomAlert />
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
