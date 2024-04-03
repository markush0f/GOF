import { Renderer } from "../Interfaces/Renderer.interface";
import { Shape } from "../Interfaces/Shape.interface";

// Refined Abstraction: Square
export class Square implements Shape {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    draw(): void {
        console.log("Drawing Square");
        this.renderer.renderShape();
    }
}
