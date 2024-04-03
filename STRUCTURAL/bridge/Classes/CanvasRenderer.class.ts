import { Renderer } from "../Interfaces/Renderer.interface";

// Concrete Implementor 2: CanvasRenderer
export class CanvasRenderer implements Renderer {
    renderShape(): void {
        console.log("Rendering shape using Canvas");
    }
}