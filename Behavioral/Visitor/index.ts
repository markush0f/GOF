import { Circle } from "./Classes/Circle.class";
import { ShapeInfoVisitor } from "./Classes/ShapeInfoVisitor.class";
import { Square } from "./Classes/Square.class";
import { Shape } from "./Interfaces/Shape.interface";

const shapes: Shape[] = [
    new Circle(5),
    new Square(4)
];

const shapeInfoVisitor = new ShapeInfoVisitor();

for (const shape of shapes) {
    shape.accept(shapeInfoVisitor);
}