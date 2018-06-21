import ITestService from "./ITestService";

export class TestService implements ITestService {
  public get(): string[]{
    return ["Test", "Service"];
  }
}