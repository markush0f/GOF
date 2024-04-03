import { Shape } from "../interface/Shape.interface";

export class Triangle implements Shape {
    draw(fillColor: String): void {
        console.log("Drawing Triangle with color " + fillColor)
    }
}
