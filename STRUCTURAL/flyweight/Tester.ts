import { Employee } from "./Employee";

export class Tester implements Employee {

    private job: String;
    private skill: String;

    public constructor() {
        this.job = "Test the issue";
        this.skill = "";
    }

    public assignSkill(skill: String): void {
        this.skill = skill;
    }

    public task(): void {
        console.log("Tester with Skill: " + this.skill + " with Job: " + this.job);
    }

}