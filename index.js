// class Person{
//     static especia = "humano"

//     constructor(name) {
//         this.name = name
//     }

//     saludar() {
//         console.log(`Mi nombre es ${this.name}`);
//     }
// }

// const person1 = new Person("franco");
// const person2 = new Person("ivana");

// person1.saludar();

class Contador {
static cuentaGlobal = 0;

    constructor(responsable){
        this.responsable = responsable;
        this.cuenta = 0;
    }

    getResponsable() {
        return this.responsable;
    }

    contar() {
        this.cuenta =this.cuenta + 1;
        Contador.cuentaGloblal = Contador.cuentaGlobal + 1;

        console.log(`Contador de ${this.responsable}: ${this.cuenta}`);
    }
}

const contador1 = new Contador("german");
const contador2 = new Contador("carlos");

contador1.contar();
contador2.contar();
contador1.contar();

console.log(contador1.getResponsable())