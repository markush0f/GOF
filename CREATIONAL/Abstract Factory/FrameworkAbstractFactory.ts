import { Framework } from "./framework"

export interface FrameworkAbstractFactory {
    createFramework(): Framework;
}