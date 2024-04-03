import { CommandExecutor } from "../Interfaces/CommandExecutor.interface";
import { CommandExecutorImpl } from "./CommandExecutorImpl.class";


export class CommandExecutorProxy implements CommandExecutor {

    private isAdmin: boolean;
    private executor: CommandExecutor;

    public constructor(user: String, pwd: String) {
        if ("Pankaj" == user && "J@urnalD$v" == pwd) {
            this.isAdmin = true
        }
        else {
            this.isAdmin = false;
        }
        this.executor = new CommandExecutorImpl();
    }

    public runCommand(cmd: String): void {
        if (this.isAdmin) {
            this.executor.runCommand(cmd);
        } else {
            if (cmd.trim().startsWith("rm")) {
                console.log("rm command is not allowed for non-admin users.");
            } else {
                this.executor.runCommand(cmd);
            }
        }
    }

}
