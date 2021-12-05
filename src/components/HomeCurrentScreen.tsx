export type HomeCurrentScreen =
  | "BusinessScreen"
  | "StudentsScreen"
  | "TeachersScreen"
  | "ClassesScreen";
export type HomeGotoType = {
  screen: HomeCurrentScreen;
  name: string;
  parms?: any;
};
