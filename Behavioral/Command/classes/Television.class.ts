import { Device } from "../interfaces/Device.interface";
export class Television implements Device {
    turnOn(): void {
        console.log("Television is turned on");
    }

    turnOff(): void {
        console.log("Television is turned off");
    }
}
