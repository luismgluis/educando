export type HomeCurrentScreen =
  | "BusinessScreen"
  | "StudentsScreen"
  | "TeachersScreen"
  | "ClassesScreen"
  | "SubjectsScreen";
export type HomeGotoType = {
  screen: HomeCurrentScreen;
  name: string;
  parms?: any;
};
