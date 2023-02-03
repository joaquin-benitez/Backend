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

//how to create a class in javascript?  
var Foo = (function() {
    // "private" variables 
    var _bar;

    // constructor
    function Foo() {};

    // add the methods to the prototype so that all of the 
    // Foo instances can access the private static
    Foo.prototype.getBar = function() {
        return _bar;
    };
    Foo.prototype.setBar = function(bar) {
        _bar = bar;
    };

    return Foo;
})();


var a = new Foo();
var b = new Foo();
a.setBar('a');
b.setBar('b');
alert(a.getBar()); // alerts 'b' :(    


var Foo = (function() {
    // constructor
    function Foo() {
        this._bar = "some value";
    };

    // add the methods to the prototype so that all of the 
    // Foo instances can access the private static
    Foo.prototype.getBar = function() {
        return this._bar;
    };
    Foo.prototype.setBar = function(bar) {
        this._bar = bar;
    };

    return Foo;
})();


var a = new Foo();
var b = new Foo();
a.setBar('a');
b.setBar('b');
alert(a.getBar()); // alerts 'a' :) 
alert(b.getBar()); // alerts 'b' :) 


delete a._bar;
b._bar = null;
alert(a.getBar()); // alerts undefined :(
alert(b.getBar()); // alerts null :(




//Source: https://stackoverflow.com/questions/12610394








    






