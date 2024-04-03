import { CommandExecutorProxy } from "../CommandExecutorProxy";
import { CommandExecutor } from "../CommandExecutor";

class ProxyPatternTest {

    public static main(): void {
        const executor: CommandExecutor = new CommandExecutorProxy("Pankaj", "wrong_pwd");
        executor.runCommand("ls -ltr");
        executor.runCommand(" rm -rf abc.pdf");
    }
}

ProxyPatternTest.main();