import ITestService from "./ITestService";
export default class TestService implements ITestService {
    get(): string[];
}
