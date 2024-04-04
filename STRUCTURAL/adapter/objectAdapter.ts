// Class representing Old Calculator
class OldCalculator {
    calculate(num1: number, num2: number, operation: string): number {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            default:
                throw new Error('Unsupported operation');
        }
    }
}

// Interface which represent the new Calculator
interface NewCalculator {
    add(num1: number, num2: number): number;
}

// Object Adapter: Adapts the interface OldCalculator to NewCalculator
class CalculatorAdapter implements NewCalculator {
    private oldCalculator: OldCalculator;

    constructor() {
        this.oldCalculator = new OldCalculator();
    }

    add(num1: number, num2: number): number {
        return this.oldCalculator.calculate(num1, num2, 'add');
    }
}

// Use Adapter Pattern
const adapter = new CalculatorAdapter();
console.log(adapter.add(5, 3)); // Exit: 8