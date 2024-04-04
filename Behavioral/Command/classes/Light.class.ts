import { Device } from "../interfaces/Device.interface";
export class Light implements Device {
    turnOn(): void {
        console.log("Light is turned on");
    }

    turnOff(): void {
        console.log("Light is turned off");
    }
}
