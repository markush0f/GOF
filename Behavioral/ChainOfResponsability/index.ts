// Handler interface
interface DispenseHandler {
    setNextHandler(handler: DispenseHandler): void;
    dispense(amount: number): void;
}

// Concrete Handler 1: Dispense $50 bills
class FiftyDollarHandler implements DispenseHandler {
    private nextHandler: DispenseHandler;

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

// Concrete Handler 2: Dispense $20 bills
class TwentyDollarHandler implements DispenseHandler {
    private nextHandler: DispenseHandler;

    setNextHandler(handler: DispenseHandler): void {
        this.nextHandler = handler;
    }

    dispense(amount: number): void {
        const billSize = 20;
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

// Concrete Handler 3: Dispense $10 bills
class TenDollarHandler implements DispenseHandler {
    private nextHandler: DispenseHandler;

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

// Client class
class ATM {
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

// Usage
const atm = new ATM();
atm.dispenseMoney(150);
