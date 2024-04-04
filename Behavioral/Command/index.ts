import { Light } from "./classes/Light.class";
import { RemoteControl } from "./classes/RemoteControl.class";
import { Television } from "./classes/Television.class";
import { TurnOffCommand } from "./classes/TurnOffCommand.class";
import { TurnOnCommand } from "./classes/TurnOnCommand.class";

const tv = new Television();
const light = new Light();

const remote = new RemoteControl();

remote.setCommand(new TurnOnCommand(tv));
remote.pressButton(); 

remote.setCommand(new TurnOffCommand(light));
remote.pressButton(); 
