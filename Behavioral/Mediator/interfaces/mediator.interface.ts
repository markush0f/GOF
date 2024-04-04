import { Colleague } from "../classes/colleague.class";

export interface Mediator {
    communicate(sender: Colleague, action: string): void;
}