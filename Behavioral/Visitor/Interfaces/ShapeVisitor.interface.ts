import { Circle } from "../Classes/Circle.class";
import { Square } from "../Classes/Square.class";

export interface ShapeVisitor {
    visitCircle(circle: Circle): void;
    visitSquare(square: Square): void;
}