import { CommandExecutor } from "./CommandExecutor";

export class CommandExecutorImpl implements CommandExecutor {

	public runCommand(cmd: String):void {
		console.log("'" + cmd + "' command executed.");
	}

}