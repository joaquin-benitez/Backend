class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros];
        this.mascotas = [mascotas];
    }

    getFullName () { 
        return `${this.nombre } ${this.apellido}`
    };

    addMascota (mascota) {
        return mascotas.push('mascota')
    };

    countMascotas (){
        return this.mascotas
    };

    addBook (nombre, autor){
        return
    };

    getBookNames() {
        return this.libros
    }
    
    
};

const myUsuario = new Usuario('joaquin', 'benitez', ['nombre:El silmarillon, autor:Tolkien'],['gato']);
console.log(myUsuario.nombre);
console.log(myUsuario.apellido);
console.log(myUsuario.libros);
console.log(myUsuario.mascotas);




