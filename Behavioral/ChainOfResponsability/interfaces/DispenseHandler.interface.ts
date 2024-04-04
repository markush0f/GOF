// Handler interface
export interface DispenseHandler {
    setNextHandler(handler: DispenseHandler): void;
    dispense(amount: number): void;
}
