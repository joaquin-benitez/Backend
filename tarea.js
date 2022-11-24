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
        return mascotas.push(mascota)
    };

    countMascotas (){
        return this.mascotas.length
    };

    addBook (nombre, autor){
        return this.libros.push(nombre,autor)
    };

    getBookNames() {
        return this.libros.map.nombre
    }
    
    
};

const myUsuario = new Usuario('joaquin', 'benitez', ['nombre:El silmarillon, autor:Tolkien'],['gato']);
console.log(myUsuario.nombre);
console.log(myUsuario.apellido);
console.log(myUsuario.libros);
console.log(myUsuario.mascotas);




