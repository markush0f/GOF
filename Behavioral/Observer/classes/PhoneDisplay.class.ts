import { Observer } from "../interfaces/Observer.interface";

export class PhoneDisplay implements Observer {
    update(temperature: number): void {
        console.log("Phone Display: temperature updated to " + temperature);
    }
}