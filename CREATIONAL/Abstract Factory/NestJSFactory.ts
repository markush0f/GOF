import { NestJS } from "./NestJS";
import { Framework } from "./framework";
import { FrameworkAbstractFactory } from "./FrameworkAbstractFactory";

export class NestJsFactory implements FrameworkAbstractFactory {
    private language: string;
    private version: string;
    private documentationURL: string;

    constructor(languge: string, version: string, documentationURL: string) {
        this.language = languge
        this.version = version
        this.documentationURL = documentationURL
    }

    createFramework(): Framework {
        return new NestJS(this.language, this.version, this.documentationURL);
    }

}