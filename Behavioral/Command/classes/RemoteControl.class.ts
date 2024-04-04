import { Command } from "../interfaces/Command.interface";

export class RemoteControl {
    private command!: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}