import utils from "../libs/utils/utils";

export interface ClassRoomInterface {
  id: string;
  name: string;
  lastName: string;
  idCard: string;
  email: string;
  code: string;
  grade: string;
  group: string;
  activeClasses: string;
  creationDate: number;
  isNull?: boolean;
}
export default class ClassRoom implements ClassRoomInterface {
  id: string;
  name: string;
  lastName: string;
  idCard: string;
  email: string;
  code: string;
  grade: string;
  group: string;
  activeClasses: string;
  creationDate: number;
  isNull?: boolean;
  constructor(data: ClassRoomInterface | null, isNull?: boolean) {
    this.name = data?.name || "";
    this.id = data?.id || "";
    this.activeClasses = data?.activeClasses || "";
    this.lastName = data?.lastName || "";
    this.idCard = data?.idCard || "";
    this.email = data?.email || "";
    this.code = data?.code || "";
    this.grade = data?.grade || "";
    this.group = data?.group || "";
    this.isNull = isNull || false; // check if Student has not initialized
    this.creationDate = data?.creationDate || 0;
  }

  public get isEmpty(): boolean {
    return this.id === "";
  }
  // la propiedad validate que me piden en student luego del error 3-12-21
  validate() {
    if (this.name.length < 2) return false;
    if (!utils.validateEmail(this.email)) return false;
    if (this.creationDate <= 0) return false;
    return true;
  }

  exportObject() {
    const newOb = utils.objects.cloneObject(this);
    console.log(newOb);
    return newOb;
  }
}
