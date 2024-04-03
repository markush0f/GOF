export abstract class Framework {

    public abstract get Language(): string;
    public abstract get Version(): string;
    public abstract get DocumentationURL(): string;

    public toString(): string {
        return `-Language: ${this.Language}
        \n -Version: ${this.Version}
        \n -Documentation: ${this.DocumentationURL}`
    }

}