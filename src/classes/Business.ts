import utils from "../libs/utils/utils";

export interface BusinessInterface {
  id: string;
  name: string;
  email: string;
  creationDate: number;
  isNull?: boolean;
}
export default class Business implements BusinessInterface {
  id: string;
  name: string;
  email: string;
  creationDate: number;
  isNull?: boolean;
  constructor(data: BusinessInterface | null, isNull?: boolean) {
    this.name = data?.name || "";
    this.id = data?.id || "";
    this.email = data?.email || "";
    this.isNull = isNull || false; // check if Business has not initialized
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
