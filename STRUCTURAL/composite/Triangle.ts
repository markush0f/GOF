import { Shape } from "./Shape";

export class Triangle implements Shape {
    draw(fillColor: String): void {
        console.log("Drawing Triangle with color " + fillColor)
    }
}
