import { ShapeVisitor } from "./ShapeVisitor.interface";

export interface Shape {
    accept(visitor: ShapeVisitor): void;
}