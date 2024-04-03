import { Shape } from "../interface/Shape.interface";

export class Circle implements Shape {
    draw(fillColor: string): void {
        console.log("Drawing Circle with color " + fillColor);
    }
}