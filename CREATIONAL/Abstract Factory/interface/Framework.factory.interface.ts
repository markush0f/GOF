import { Framework } from "../classes/Framework.class"

export interface FrameworkAbstractFactory {
    createFramework(): Framework;
}