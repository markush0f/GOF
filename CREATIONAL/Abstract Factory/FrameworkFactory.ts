import { Framework } from "./framework";
import { FrameworkAbstractFactory } from "./FrameworkAbstractFactory";

export class FrameworkFactory {
    public static getFramework(factory: FrameworkAbstractFactory): Framework {
        return factory.createFramework();
    }
}