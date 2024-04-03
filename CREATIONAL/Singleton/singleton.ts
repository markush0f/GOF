/* 
Singleton is a creative design pattern that ensures 
that a class has only one instance and provides a global 
access point to this instance. 
Una vez se crea la primera instancia,
 todas las futuras llamadas a un método para devolver
 la instancia devolverá siempre la primera instancia.
*/

class Singleton {
    private static instance: Singleton;

    private constructor() { }

    // This method generate the unique instance of the class
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // We can defined other methods and propierties of this class...

}

// We checked if the variables contain the same instance
function ckechInstaceOfVariables() {

    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

ckechInstaceOfVariables();
