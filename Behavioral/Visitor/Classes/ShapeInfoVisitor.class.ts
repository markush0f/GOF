import { ShapeVisitor } from "../Interfaces/ShapeVisitor.interface";
import { Circle } from "./Circle.class";
import { Square } from "./Square.class";

export class ShapeInfoVisitor implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        const area = Math.PI * circle.radius * circle.radius;
        const perimeter = 2 * Math.PI * circle.radius;
        console.log(`Circle - Area: ${area}, Perimeter: ${perimeter}`);
    }
    visitSquare(square: Square): void {
        const area = square.sideLength * square.sideLength;
        const perimeter = 4 * square.sideLength;
        console.log(`Square - Area: ${area}, Perimeter: ${perimeter}`);
    }
}