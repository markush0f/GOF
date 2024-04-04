export interface IteratorInterface {
    hasNext: () => boolean;
    next: () => string | null;
    increaseIndex: () => void;
    index: number;
}