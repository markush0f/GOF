import { DispenseHandler } from "../interfaces/DispenseHandler.interface";

export class TenDollarHandler implements DispenseHandler {
    private nextHandler!: DispenseHandler;

    setNextHandler(handler: DispenseHandler): void {
        this.nextHandler = handler;
    }

    dispense(amount: number): void {
        if (amount >= 10) {
            const billSize = 10;
            const billCount = Math.floor(amount / billSize);
            console.log(`Dispensing ${billCount} x $${billSize} bills`);
        } else {
            console.log("Amount cannot be dispensed with $10 bills");
        }
    }
}