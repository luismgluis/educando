import Student from "../../../classes/Student";
import User from "../../../classes/User";
import utils from "../../../libs/utils/utils";
import App from "../../App";

const TAG = "FIRE DATABASE USER";
class FireDatabaseStudent {
  private app: App;
  private allStudent: any;
  constructor(app: App) {
    this.app = app;
    this.allStudent = {};
  }
  getStudent(idStudent: string) {
    const that = this;
    const db = this.app.database();
    return new Promise<Student>((resolve, reject) => {
      try {
        if (typeof that.allStudent[idStudent] !== "undefined") {
          resolve(that.allStudent[idStudent]);
          return;
        }
        db.collection("Student")
          .doc(idStudent)
          .get()
          .then((result) => {
            if (result.exists) {
              const data: any = result.data();
              data.id = result.id;
              const student = new Student(data);
              that.allStudent[idStudent] = student;
              resolve(student);
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
  saveStudent(me: User, student: Student) {
    const that = this;
    const save = async () => {
      const res = await that.app
        .database()
        .collection("student")
        .add(student.exportObject())
        .catch(() => null);
      if (res) {
        student.id = res.id;
        return true;
      }
      return null;
    };
    const saveOnMe = async () => {
      const res = await that.app
        .database()
        .collection("users")
        .doc(me.id)
        .collection("student")
        .doc(student.id)
        .set({ creationDate: utils.dates.dateNowUnix() })
        .then(() => true)
        .catch(() => null);
      return res;
    };
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const resSave = await save();
        if (!resSave) {
          reject("fail to save data on Student colletion");
          return;
        }
        const resSaveOnMe = await saveOnMe();
        if (resSaveOnMe) {
          resolve(true);
          return;
        }
        reject("Fail on add to me Student");
      } catch (error) {
        reject(null);
      }
    });
  }
  modifyStudent(student: Student) {
    const that = this;
    const save = async () => {
      const res = await that.app
        .database()
        .collection("student")
        .doc(student.id)
        .set(student.exportObject())
        .then(() => true)
        .catch(() => null);
      if (res) {
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
        reject("Fail on add to me Student");
      } catch (error) {
        reject(null);
      }
    });
  }
  removeStudent(me: User, student: Student) {
    const that = this;
    const remove = async () => {
      const res = await that.app
        .database()
        .collection("student")
        .doc(student.id)
        .delete()
        .then(() => true)
        .catch(() => null);
      return res;
    };
    const removeOnUser = async () => {
      const res = await that.app
        .database()
        .collection("users")
        .doc(me.id)
        .collection("student")
        .doc(student.id)
        .delete()
        .then(() => true)
        .catch(() => null);
      return res;
    };

    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const resAction = await remove();
        await removeOnUser();
        if (resAction) {
          resolve(true);
          return;
        }
        reject("Fail on remove this Student");
      } catch (error) {
        reject(null);
      }
    });
  }
}

export default FireDatabaseStudent;