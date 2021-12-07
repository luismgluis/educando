import Business from "../../../classes/Business";
import Teacher from "../../../classes/Teacher";
import User from "../../../classes/User";
import utils from "../../../libs/utils/utils";
import App from "../../App";

const TAG = "FIRE DATABASE USER";
class FireDatabaseTeacher {
  private app: App;
  private allTeacher: any;
  constructor(app: App) {
    this.app = app;
    this.allTeacher = {};
  }
  getTeacher(idTeacher: string, business: Business) {
    const that = this;
    const db = this.app.database();
    return new Promise<Teacher>((resolve, reject) => {
      try {
        if (typeof that.allTeacher[idTeacher] !== "undefined") {
          resolve(that.allTeacher[idTeacher]);
          return;
        }
        db.collection("business")
          .doc(business.id)
          .collection("teachers")
          .doc(idTeacher)
          .get()
          .then((result) => {
            if (result.exists) {
              const data: any = result.data();
              data.id = result.id;
              const teacher = new Teacher(data);
              that.allTeacher[idTeacher] = teacher;
              resolve(teacher);
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
  saveTeacher(me: User, business: Business, teacher: Teacher) {
    const that = this;
    const save = async () => {
        teacher.creationDate = utils.dates.dateNowUnix();
        teacher.creator = me.id;

      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("teachers")
        .add(teacher.exportObject())
        .catch(() => null);
      if (res) {
        teacher.id = res.id;
        return true;
      }
      return null;
    };

    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const resSave = await save();
        if (!resSave) {
          reject("fail to save data on Teacher colletion");
          return;
        }
        resolve(true);
      } catch (error) {
        reject(null);
      }
    });
  }
  getTeachers(business: Business) {
    const that = this;
    const getData = async () => {
      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("teachers")
        .get()
        .catch(() => null);
      const arr: Teacher[] = [];
      if (res) {
        if (!res.empty) {
          res.forEach((doc) => {
            const data: any = doc.data();
            data.id = doc.id;
            arr.push(new Teacher(data));
          });
        }
        return arr;
      }
      return null;
    };

    return new Promise<Teacher[]>(async (resolve, reject) => {
      try {
        const result = await getData();
        if (!result) {
          reject("fail to save data on Teacher colletion");
          return;
        }
        resolve(result);
      } catch (error) {
        reject(null);
      }
    });
  }
  getTeachersListener(business: Business, callback: (res: Teacher[]) => void) {
    const that = this;
    const unsubs = that.app
      .database()
      .collection("business")
      .doc(business.id)
      .collection("teachers")
      .onSnapshot((res) => {
        const arr: Teacher[] = [];
        if (res) {
          if (!res.empty) {
            res.forEach((doc) => {
              const data: any = doc.data();
              data.id = doc.id;
              arr.push(new Teacher(data));
            });
          }
          callback(arr);
          return;
        }
        callback([]);
      });

    return unsubs;
  }
  modifyTeacher(teacher: Teacher, business: Business) {
    const that = this;
    const save = async () => {
      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("teachers")
        .doc(teacher.id)
        .set(teacher.exportObject())
        .then(() => true)
        .catch((err) => {
          return err;
        });
      if (res) {
        console.log("modifyTeacher realizado con exito");
        return true;
      }
      return null;
    };

    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const resSave = await save();
        if (resSave) {
          resolve(true);
          return;
        }
        reject("Fail on add to me Teacher");
      } catch (error) {
        reject(null);
      }
    });
  }
  removeTeacher(teacher: Teacher, business: Business) {
    const that = this;
    const remove = async () => {
      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("teachers")
        .doc(teacher.id)
        .delete()
        .then(() => true)
        .catch((err) => {
          console.log(TAG, err);
          return err;
        });
      return res;
    };

    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const resAction = await remove();
        if (resAction) {
          resolve(true);
          return;
        }
        reject("Fail on remove this Teacher");
      } catch (error) {
        reject(null);
      }
    });
  }
}

export default FireDatabaseTeacher;
