import { Framework } from "./Framework.class";


export class Django extends Framework {
    private language: string;
    private version: string;
    private documentationURL: string;

    constructor(language: string, version: string, documentationURL: string) {
        super();
        this.language = language;
        this.version = version;
        this.documentationURL = documentationURL;
    }

    public get Language(): string {
        return this.language;
    }
    public get Version(): string {
        return this.version;
    }
    public get DocumentationURL(): string {
        return this.documentationURL;
    }
}