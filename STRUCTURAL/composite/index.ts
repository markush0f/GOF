import { Circle } from "./classes/Circle.class";
import { Drawing } from "./classes/Drawing.class";
import { Triangle } from "./classes/Triangle.class";


class TestCompositePattern {

    public static main(): void {
        const tri = new Triangle();
        const tri1 = new Triangle();
        const cir = new Circle();

        const drawing = new Drawing();
        drawing.add(tri1);
        drawing.add(tri1);
        drawing.add(cir);

        drawing.draw("Red");

        drawing.clear();

        drawing.add(tri);
        drawing.add(cir);
        drawing.draw("Green");
    }
}

TestCompositePattern.main();
