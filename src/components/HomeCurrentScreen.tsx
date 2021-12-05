export type HomeCurrentScreen =
  | "BusinessScreen"
  | "StudentsScreen"
  | "TeachersScreen"
  | "AddUser";
export type HomeGotoType = {
  screen: HomeCurrentScreen;
  name: string;
  parms?: any;
};
