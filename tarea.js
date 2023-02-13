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


const fs = require("fs");
const crypto = require("crypto");

class UserManager {
  #path;

  constructor(path) {
    this.#path = path;
  }

  async createUser(firstName, lastName, username, password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");

    const newUser = {
      firstName,
      lastName,
      username,
      password: {
        hash: hashedPassword,
        salt,
      },
    };

    const users = await this.getUsers();

    const updatedUsers = [...users, newUser];

    await fs.promises.writeFile(this.#path, JSON.stringify(updatedUsers));
  }

  async validateUser(username, password) {
    const users = await this.getUsers();

    const userToValidate = users.find((u) => u.username === username);

    if (!userToValidate) {
      throw new Error(`User with username ${username} doesn't exist`);
    }

    const hashedInputPassword = crypto
      .pbkdf2Sync(password, userToValidate.password.salt, 1000, 64, "sha512")
      .toString("hex");

    if (userToValidate.password.hash === hashedInputPassword) {
      return "Logueado";
    } else {
      throw new Error("Contraseña inválida");
    }
  }

  async getUsers() {
    try {
      const users = await fs.promises.readFile(this.#path, "utf-8");

      return JSON.parse(users);
    } catch (e) {
      return [];
    }
  }
}

async function main() {
  const manager = new UserManager("./Users.json");

  let users = await manager.getUsers();

  console.log(users);

  // await manager.createUser("Valentino", "Araya", "valen", "password");

  users = await manager.getUsers();
  console.log(users);

  const validationResult = await manager.validateUser("valen", "password");
  console.log(validationResult);
}

main();

updateProduct(productId, dataToUpdate) 
  // Aca irian checks de que la data tenga sentido, no se incluya el ID, y demas

  const products = await this.getProducts();

  const updatedProducts = products.map((p) => p.id === productId ? {...p, ...dataToUpdate} : p)
                                       
  // ...resto del codigo de escritura








    






