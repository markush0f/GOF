// Strategy interface
interface SortingStrategy {
    sort(data: number[]): number[];
}

// Concrete Strategies
class BubbleSortStrategy implements SortingStrategy {
    sort(data: number[]): number[] {

        return data.slice().sort((a, b) => a - b);
    }
}

class QuickSortStrategy implements SortingStrategy {
    sort(data: number[]): number[] {
        // Implement quick sort algorithm
        return this.quickSort(data.slice());
    }

    private quickSort(data: number[]): number[] {
        if (data.length <= 1) return data;

        const pivot = data[0];
        const left: number[] = [];
        const right: number[] = [];

        for (let i = 1; i < data.length; i++) {
            if (data[i] < pivot) {
                left.push(data[i]);
            } else {
                right.push(data[i]);
            }
        }

        return [...this.quickSort(left), pivot, ...this.quickSort(right)];
    }
}

// Context class
class Sorter {
    private strategy: SortingStrategy;

    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortingStrategy): void {
        this.strategy = strategy;
    }

    sortData(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

// Usage
const data = [5, 2, 9, 1, 5, 6];
const sorter = new Sorter(new BubbleSortStrategy());
console.log("Sorted data using Bubble Sort:", sorter.sortData(data));

sorter.setStrategy(new QuickSortStrategy());
console.log("Sorted data using Quick Sort:", sorter.sortData(data));
