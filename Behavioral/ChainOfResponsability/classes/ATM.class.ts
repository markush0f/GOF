import { DispenseHandler } from "../interfaces/DispenseHandler.interface";
import { FiftyDollarHandler } from "./FiftyDollarHandler.class";
import { TenDollarHandler } from "./TenDollarHandler.class";
import { TwentyDollarHandler } from "./TwentyDollarHandler.class";

export class ATM {
    private dispenseHandler: DispenseHandler;

    constructor() {
        // Create the chain of responsibility
        const fiftyHandler = new FiftyDollarHandler();
        const twentyHandler = new TwentyDollarHandler();
        const tenHandler = new TenDollarHandler();

        fiftyHandler.setNextHandler(twentyHandler);
        twentyHandler.setNextHandler(tenHandler);

        this.dispenseHandler = fiftyHandler;
    }

    // Method to dispense money
    dispenseMoney(amount: number): void {
        console.log(`Dispensing $${amount}`);
        this.dispenseHandler.dispense(amount);
    }
}