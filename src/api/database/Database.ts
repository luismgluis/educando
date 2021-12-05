import App from "../App";
import FireDatabaseBusiness from "./business/FireDatabaseBusiness";
import FireDatabaseStudent from "./student/FireDatabaseStudent";
import FireDatabaseUser from "./user/FireDatabaseUser";

class Database {
  user: FireDatabaseUser;
  business: FireDatabaseBusiness;
  student: FireDatabaseStudent;
  constructor(app: App) {
    this.user = new FireDatabaseUser(app);
    this.business = new FireDatabaseBusiness(app);
    this.student = new FireDatabaseStudent(app);
  }
}
export default Database;
