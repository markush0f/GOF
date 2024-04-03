import { Renderer } from "../Interfaces/Renderer.interface";
import { Shape } from "../Interfaces/Shape.interface";

// Refined Abstraction: Circle
export class Circle implements Shape {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    draw(): void {
        console.log("Drawing Circle");
        this.renderer.renderShape();
    }
}