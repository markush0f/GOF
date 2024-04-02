/*
The factory design pattern is used when we have a superclass with multiple sub-classes 
and based on input, we need to return one of the sub-class. 
This pattern takes out the responsibility of the instantiation 
of a class from the client program to the factory class.
So, the idea is to encapsulate the creation of objects and provide an interface 
to create different types of objects without explicitly specifying their class.

*/

export abstract class Computer {

    abstract getRAM(): string;
    abstract getHDD(): string;
    abstract getCPU(): string;

    public getInfo(): string {
        return `RAM:  ${this.getRAM()} HDD= ${this.getHDD()} CPU= ${this.getCPU()}`;
    }
}

