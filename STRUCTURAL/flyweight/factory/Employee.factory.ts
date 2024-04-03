
import { Tester } from "../Classes/Tester.class";
import { Developer } from "../Classes/Developer.class";
import { Employee } from "../Interfaces/Employee.interface";

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