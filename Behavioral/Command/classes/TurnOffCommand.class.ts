import { Command }   from "../interfaces/Command.interface";
import { Device } from "../interfaces/Device.interface";
export class TurnOffCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.turnOff();
    }
}