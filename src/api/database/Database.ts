import App from "../App";
import FireDatabaseBusiness from "./business/FireDatabaseBusiness";
import FireDatabaseStudent from "./student/FireDatabaseStudent";
import FireDatabaseTeacher from "./teacher/FireDataTeacher";
import FireDatabaseUser from "./user/FireDatabaseUser";

class Database {
  user: FireDatabaseUser;
  business: FireDatabaseBusiness;
  student: FireDatabaseStudent;
  teacher: FireDatabaseTeacher;
  constructor(app: App) {
    this.user = new FireDatabaseUser(app);
    this.business = new FireDatabaseBusiness(app);
    this.student = new FireDatabaseStudent(app);
    this.teacher = new FireDatabaseTeacher(app);
  }
}
export default Database;
