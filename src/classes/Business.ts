import utils from "../libs/utils/utils";

export interface BusinessInterface {
  id: string;
  name: string;
  email: string;
  description?: string;
  creationDate: number;
  urlImg?: string;
  isNull?: boolean;
}
export default class Business implements BusinessInterface {
  id: string;
  name: string;
  email: string;
  urlImg: string;
  description?: string;
  creationDate: number;
  isNull?: boolean;
  constructor(data: BusinessInterface | null, isNull?: boolean) {
    this.name = data?.name || "";
    this.id = data?.id || "";
    this.email = data?.email || "";
    this.description = data?.description || "";
    this.urlImg = data?.urlImg || "";
    this.isNull = isNull || false; // check if Business has not initialized
    this.creationDate = data?.creationDate || 0;
  }

  public get isEmpty(): boolean {
    return this.id === "";
  }
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
