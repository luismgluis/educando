import utils from "../libs/utils/utils";

export interface TeacherInterface {
  id: string;
  name: string;
  lastName: string;
  subject: string;
  idCard: string;
  email: string;
  creationDate: number;
  isNull?: boolean;
  creator?: string;
}
export default class Teacher implements TeacherInterface {
  id: string;
  name: string;
  lastName: string;
  subject: string;
  idCard: string;
  email: string;
  creationDate: number;
  isNull?: boolean;
  creator?: string;
  constructor(data: TeacherInterface | null, isNull?: boolean) {
    this.name = data?.name || "";
    this.id = data?.id || "";
    this.email = data?.email || "";
    this.lastName = data?.lastName || "";
    this.subject = data?.subject || ";"
    this.idCard = data?.idCard || "";
    this.isNull = isNull || false; // check if Customer has not initialized
    this.creator = data?.creator || "";
    this.creationDate = data?.creationDate || 0;
  }

  public get isEmpty(): boolean {
    return this.id === "";
  }

  exportObject() {
    const newOb = utils.objects.cloneObject(this);
    console.log(newOb);
    return newOb;
  }
}
