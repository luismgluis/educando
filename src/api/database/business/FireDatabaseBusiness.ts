import Business from "../../../classes/Business";
import User from "../../../classes/User";
import App from "../../App";

const TAG = "FIRE DATABASE USER";
class FireDatabaseBusiness {
  private app: App;
  private allBusiness: any;
  constructor(app: App) {
    this.app = app;
    this.allBusiness = {};
  }
  getBusiness(idBusiness: string) {
    const that = this;
    const db = this.app.database();
    return new Promise<User>((resolve, reject) => {
      try {
        if (typeof that.allBusiness[idBusiness] !== "undefined") {
          resolve(that.allBusiness[idBusiness]);
          return;
        }
        db.collection("business")
          .doc(idBusiness)
          .get()
          .then((result) => {
            if (result.exists) {
              const data: any = result.data();
              data.id = result.id;
              const business = new Business(data);
              that.allBusiness[idBusiness] = business;
              resolve(business);
              return;
            }
            reject("Not user");
          })
          .catch((err) => {
            console.log("catch", err);
            reject(err);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default FireDatabaseBusiness;
