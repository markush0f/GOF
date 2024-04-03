import { Shape } from "./Shape";

export class Drawing implements Shape{

	private shapes: Shape[] = new Array<Shape>();

	public draw(fillColor: String): void {
        this.shapes.forEach(shape => {
            shape.draw(fillColor);
        });
	}
	//adding shape to drawing
	public add(s: Shape): void{
		this.shapes.push(s);
	}
	//removing shape from drawing
	public remove(s: Shape): void{
		this.shapes.filter((shape) => shape == s);
	}
	//removing all the shapes
	public clear() : void{
		this.shapes.length = 0;
	}
}