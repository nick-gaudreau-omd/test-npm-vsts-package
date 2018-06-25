import ITestService from "./ITestService";

export default class TestService implements ITestService {
  public get(): string[]{
    return ["Test", "Service"];
  }
}