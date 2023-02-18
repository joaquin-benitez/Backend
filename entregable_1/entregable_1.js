// Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo



class ProductManager{

  product = [];
  constructor () {}

  getProducts () { 
      return this.product;
  };

  
  addProduct(title, description, price, thumbnail, code, stock) {
   
    const productWithSameCodeExists = this.product.some(
      (p) => p.code === code
    );

    if (productWithSameCodeExists) {
      throw new Error("Producto ya existente");
    };


    if(!title || !description || !price || !thumbnail || !code || !stock){
      throw new Error(`Falta un elemento del Producto`);
    };

      
    const newProduct = {
      id: this.product.length,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.product = [...this.product, newProduct];

  };


  getProductById (id){
    const product = this.product.find((pr) => pr.id === id) ;
      if (!product) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }else return product
  };

    
  
};
      


const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("arroz","arroz blanco", 40,"Sin Imagen", "zzz420", 50);
console.log(manager.getProducts());

manager.getProductById(0);
console.log(manager.getProductById(0));
