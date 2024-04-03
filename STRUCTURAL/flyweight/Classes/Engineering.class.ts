import { EmployeeFactory } from "../factory/Employee.factory";


export class Engineering {
    private static employeeType: string[] = ["Developer", "Tester"];
    private static skills: string[] = ["Java", "C++", ".Net", "Python"];

    static main(): void {
        for (let i = 0; i < 9; i++) {
            const e = EmployeeFactory.getEmployee(Engineering.getRandEmployee());
            e.assignSkill(Engineering.getRandSkill());
            e.task();
        }
    }

    private static getRandEmployee(): string {
        const randomIndex = Math.floor(Math.random() * Engineering.employeeType.length);
        return Engineering.employeeType[randomIndex];
    }

    private static getRandSkill(): string {
        const randomIndex = Math.floor(Math.random() * Engineering.skills.length);
        return Engineering.skills[randomIndex];
    }
}

Engineering.main();

