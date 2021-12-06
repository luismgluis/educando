import Business from "../../../classes/Business";
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
  getStudent(idStudent: string, business: Business) {
    const that = this;
    const db = this.app.database();
    return new Promise<Student>((resolve, reject) => {
      try {
        if (typeof that.allStudent[idStudent] !== "undefined") {
          resolve(that.allStudent[idStudent]);
          return;
        }
        db.collection("business")
          .doc(business.id)
          .collection("students")
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
  saveStudent(me: User, business: Business, student: Student) {
    const that = this;
    const save = async () => {
      student.creationDate = utils.dates.dateNowUnix();
      student.creator = me.id;

      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("students")
        .add(student.exportObject())
        .catch(() => null);
      if (res) {
        student.id = res.id;
        return true;
      }
      return null;
    };

    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const resSave = await save();
        if (!resSave) {
          reject("fail to save data on Student colletion");
          return;
        }
        resolve(true);
      } catch (error) {
        reject(null);
      }
    });
  }
  getStudents(business: Business) {
    const that = this;
    const getData = async () => {
      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("students")
        .get()
        .catch(() => null);
      const arr: Student[] = [];
      if (res) {
        if (!res.empty) {
          res.forEach((doc) => {
            const data: any = doc.data();
            data.id = doc.id;
            arr.push(new Student(data));
          });
        }
        return arr;
      }
      return null;
    };

    return new Promise<Student[]>(async (resolve, reject) => {
      try {
        const result = await getData();
        if (!result) {
          reject("fail to save data on Student colletion");
          return;
        }
        resolve(result);
      } catch (error) {
        reject(null);
      }
    });
  }
  getStudentsListener(business: Business, callback: (res: Student[]) => void) {
    const that = this;
    const unsubs = that.app
      .database()
      .collection("business")
      .doc(business.id)
      .collection("students")
      .onSnapshot((res) => {
        const arr: Student[] = [];
        if (res) {
          if (!res.empty) {
            res.forEach((doc) => {
              const data: any = doc.data();
              data.id = doc.id;
              arr.push(new Student(data));
            });
          }
          callback(arr);
          return;
        }
        callback([]);
      });

    return unsubs;
  }
  modifyStudent(student: Student, business: Business) {
    const that = this;
    const save = async () => {
      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("students")
        .doc(student.id)
        .set(student.exportObject())
        .then(() => true)
        .catch((err) => {
          return err;
        });
      if (res) {
        console.log("modifyStudent realizado con exito");
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
  removeStudent(student: Student, business: Business) {
    const that = this;
    const remove = async () => {
      const res = await that.app
        .database()
        .collection("business")
        .doc(business.id)
        .collection("students")
        .doc(student.id)
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
        reject("Fail on remove this Student");
      } catch (error) {
        reject(null);
      }
    });
  }
}

export default FireDatabaseStudent;
