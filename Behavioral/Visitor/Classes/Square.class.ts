import { Shape } from "../Interfaces/Shape.interface";
import { ShapeVisitor } from "../Interfaces/ShapeVisitor.interface";

export class Square implements Shape {
    sideLength: number;
    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }
    accept(visitor: ShapeVisitor): void {
        visitor.visitSquare(this);
    }
}