// Abstraction: Shape
interface Shape {
    draw(): void;
}

// Implementor: Renderer
interface Renderer {
    renderShape(): void;
}

// Concrete Implementor 1: SVGRenderer
class SVGRenderer implements Renderer {
    renderShape(): void {
        console.log("Rendering shape using SVG");
    }
}

// Concrete Implementor 2: CanvasRenderer
class CanvasRenderer implements Renderer {
    renderShape(): void {
        console.log("Rendering shape using Canvas");
    }
}

// Refined Abstraction: Circle
class Circle implements Shape {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    draw(): void {
        console.log("Drawing Circle");
        this.renderer.renderShape();
    }
}

// Refined Abstraction: Square
class Square implements Shape {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    draw(): void {
        console.log("Drawing Square");
        this.renderer.renderShape();
    }
}

// Client code
const svgRenderer = new SVGRenderer();
const canvasRenderer = new CanvasRenderer();

const circle = new Circle(svgRenderer);
const square = new Square(canvasRenderer);

circle.draw();
square.draw();
