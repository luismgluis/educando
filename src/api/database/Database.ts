import App from "../App";
import FireDatabaseUser from "./user/FireDatabaseUser";

class Database {
  user: FireDatabaseUser;
  constructor(app: App) {
    this.user = new FireDatabaseUser(app);
  }
}
export default Database;
