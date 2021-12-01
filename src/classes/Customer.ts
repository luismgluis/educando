import utils from "../libs/utils/utils";

export interface CustomerInterface {
  id: string;
  name: string;
  lastName: string;
  ip: string;
  router: string;
  idCard: string;
  email: string;
  creationDate: number;
  isNull?: boolean;
}
export default class Customer implements CustomerInterface {
  id: string;
  name: string;
  lastName: string;
  ip: string;
  router: string;
  idCard: string;
  email: string;
  creationDate: number;
  isNull?: boolean;
  constructor(data: CustomerInterface | null, isNull?: boolean) {
    this.name = data?.name || "";
    this.id = data?.id || "";
    this.email = data?.email || "";
    this.lastName = data?.lastName || "";
    this.ip = data?.ip || "";
    this.router = data?.router || "";
    this.idCard = data?.idCard || "";
    this.isNull = isNull || false; // check if Customer has not initialized
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
