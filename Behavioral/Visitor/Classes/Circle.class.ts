import { Shape } from "../Interfaces/Shape.interface";
import { ShapeVisitor } from "../Interfaces/ShapeVisitor.interface";

export class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }
}