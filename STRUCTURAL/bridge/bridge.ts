import { CanvasRenderer } from "./Classes/canvasRenderer.class";
import { Circle } from "./Classes/Circle.class";
import { Square } from "./Classes/Square.class";
import { SVGRenderer } from "./Classes/svgRenderer.class";

// Client code
const svgRenderer = new SVGRenderer();
const canvasRenderer = new CanvasRenderer();

const circle = new Circle(svgRenderer);
const square = new Square(canvasRenderer);

circle.draw();
square.draw();
