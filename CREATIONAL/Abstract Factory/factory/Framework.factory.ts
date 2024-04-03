import { Framework } from "../classes/Framework.class";
import { FrameworkAbstractFactory } from "../interface/Framework.factory.interface";

export class FrameworkFactory {
    public static getFramework(factory: FrameworkAbstractFactory): Framework {
        return factory.createFramework();
    }
}