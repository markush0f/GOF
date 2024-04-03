// Command interface
interface Command {
    execute(): void;
}

// Concrete Commands
class TurnOnCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.turnOn();
    }
}

class TurnOffCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.turnOff();
    }
}

// Receiver
interface Device {
    turnOn(): void;
    turnOff(): void;
}

class Television implements Device {
    turnOn(): void {
        console.log("Television is turned on");
    }

    turnOff(): void {
        console.log("Television is turned off");
    }
}

class Light implements Device {
    turnOn(): void {
        console.log("Light is turned on");
    }

    turnOff(): void {
        console.log("Light is turned off");
    }
}

// Invoker
class RemoteControl {
    private command: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}

// Usage
const tv = new Television();
const light = new Light();

const remote = new RemoteControl();

remote.setCommand(new TurnOnCommand(tv));
remote.pressButton(); // Turns on the television

remote.setCommand(new TurnOffCommand(light));
remote.pressButton(); // Turns off the light
