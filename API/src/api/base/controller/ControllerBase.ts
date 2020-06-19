import { Methods } from "./interfaceBase";
class ControllerBase {
  private dao: any;
  private getMethod: string;
  private listMethod: string;
  private insertMethod: string;
  private updateMethod: string;

  constructor({ dao, get, insert, update, list }: Methods) {
    this.dao = new dao();
    this.dao;
    this.getMethod = get || "";
    this.listMethod = list || "";
    this.insertMethod = insert || "";
    this.updateMethod = update || "";
  }

  public get(event: any) {
    let execMethod = eval("this.dao." + this.getMethod);
    return execMethod(event);
    this.dao = undefined;
  }

  public insert(event: any) {
    let execMethod = eval("this.dao." + this.insertMethod);
    return execMethod(event);
    this.dao = undefined;
  }

  public update(event: any) {
    let execMethod = eval("this.dao." + this.updateMethod);
    return execMethod(event);
    this.dao = undefined;
  }

  public list(event: any) {
    let execMethod = eval("this.dao." + this.listMethod);
    return execMethod(event);
    this.dao = undefined;
  }

  public execMethod(event: any) {
    event;
  }
}

export default ControllerBase;
