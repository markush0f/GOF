import { Observer } from "../interfaces/Observer.interface";

// Concrete Observer 2
export class CarDisplay implements Observer {
    update(temperature: number): void {
        console.log("Car Display: temperature updated to " + temperature);
    }
}
