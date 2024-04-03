interface State {
    turnOn(): void;
    turnOff(): void;
}

class TVOnState implements State {
    turnOn(): void {
        console.log("La televisión ya está encendida.");
    }

    turnOff(): void {
        console.log("Apagando la televisión.");
    }
}

class TVOffState implements State {
    turnOn(): void {
        console.log("Encendiendo la televisión.");
    }

    turnOff(): void {
        console.log("La televisión ya está apagada.");
    }
}

class RemoteControl {
    private state: State;

    constructor() {
        this.state = new TVOffState();
    }

    setState(state: State): void {
        this.state = state;
    }

    turnOnTV(): void {
        this.state.turnOn();
        this.setState(new TVOnState());
    }

    turnOffTV(): void {
        this.state.turnOff();
        this.setState(new TVOffState());
    }
}

const remoteControl = new RemoteControl();
remoteControl.turnOnTV();
remoteControl.turnOffTV();
remoteControl.turnOffTV();
remoteControl.turnOnTV();
remoteControl.turnOnTV();
remoteControl.turnOffTV();
