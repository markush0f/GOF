import { Employee } from "./Employee";

export class Developer implements Employee {

    private job: String;
    private skill: String;

    public constructor() {
        this.job = "Fix the issue";
        this.skill = "";
    }

    public assignSkill(skill: String): void {
        this.skill = skill;
    }

    public task(): void {
        console.log("Developer with skill: "
            + this.skill + " with Job: " + this.job);
    }

}