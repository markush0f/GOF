import { CommandExecutorProxy } from "./Classes/CommandExecutorProxy.class";
import { CommandExecutor } from "./Interfaces/CommandExecutor.interface";

class ProxyPatternTest {

    public static main(): void {
        const executor: CommandExecutor = new CommandExecutorProxy("Pankaj", "wrong_pwd");
        executor.runCommand("ls -ltr");
        executor.runCommand(" rm -rf abc.pdf");
    }
}

ProxyPatternTest.main();