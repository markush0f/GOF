import { DispenseHandler } from "../interfaces/DispenseHandler.interface";

export class FiftyDollarHandler implements DispenseHandler {
    private nextHandler!: DispenseHandler;

    setNextHandler(handler: DispenseHandler): void {
        this.nextHandler = handler;
    }

    dispense(amount: number): void {
        const billSize = 50;
        const billCount = Math.floor(amount / billSize);
        const remainingAmount = amount % billSize;
        if (billCount > 0) {
            console.log(`Dispensing ${billCount} x $${billSize} bills`);
        }
        if (remainingAmount > 0 && this.nextHandler) {
            this.nextHandler.dispense(remainingAmount);
        }
    }
}