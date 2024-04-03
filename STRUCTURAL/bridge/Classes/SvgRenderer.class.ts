import { Renderer } from "../Interfaces/Renderer.interface";

// Concrete Implementor 1: SVGRenderer
export class SVGRenderer implements Renderer {
    renderShape(): void {
        console.log("Rendering shape using SVG");
    }
}