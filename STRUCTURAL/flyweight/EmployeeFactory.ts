import { Developer } from "./Developer";
import { Employee } from "./Employee";
import { Tester } from "./Tester";

export class EmployeeFactory {
    private static m: { [key: string]: Employee } = {};

    static getEmployee(type: string): Employee {
        let p: Employee | null = null;
    
        if (EmployeeFactory.m[type] != null) {
            p = EmployeeFactory.m[type];
        } else {
            switch (type) {
                case "Developer":
                    console.log("Developer Created");
                    p = new Developer();
                    break;
                case "Tester":
                    console.log("Tester Created");
                    p = new Tester();
                    break;
                default:
                    console.log("No Such Employee");
            }
    
            if (p === null) {
                throw new Error("Employee not created");
            }
    
            EmployeeFactory.m[type] = p;
        }
    
        return p!;
    }

}