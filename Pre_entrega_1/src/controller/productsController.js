import fs from "fs";

export class ProductManager {
  #path;
 

  constructor(path) {
    this.#path = path;
  }

  async getProducts() {
    try {
      const products = await fs.promises.readFile(this.#path, "utf-8");

      return JSON.parse(products);
    } catch (e) {
      return [];
    }
  }

  async addProduct(title, description, price, thumbnails, code, stock) {
   
    const products = await this.getProducts();

    const productToValidate = products.some((p) => p.code === code);

    if (productToValidate) {
      throw new Error(`Producto ya existente`);
        }
  
  
    if(!title || !description || !price || !thumbnails || !code || !stock){
        throw new Error(`Falta un elemento del Producto`);
    };
  
        
    const newProduct = {
        id: await this.#generateId(),
        title,
        description,
        price,
        thumbnails: [],
        status: true,
        code,
        stock,
    };

    const updatedProducts = [...products, newProduct];

    await fs.promises.writeFile(this.#path, JSON.stringify(updatedProducts));
  }
  
  async getProductById (id){

    const products = await this.getProducts();

     const idProductToValidate = products.find((p) => p.id === parseInt(id));
      if (!idProductToValidate) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }else return idProductToValidate;
  }

  async updateProduct(id,dataToUpdate){
    
    const products = await this.getProducts();
    const index = products.findIndex((product) => product.id === parseInt(id));
    if (index === -1) {
      throw new Error("Producto no encontrado");
    } else {
      const updatedProduct = { ...products[index], ...dataToUpdate };
      products.splice(index, 1, updatedProduct);
      await fs.promises.writeFile(this.#path, JSON.stringify(products));
      return updatedProduct;
    }
    
  }

  async deleteProduct(id) {

    const products = await this.getProducts();

    const product = products.find((p) => p.id === parseInt(id));
      
    const index = products.indexOf(product)

    products.splice(index,1)

    await fs.promises.writeFile(this.#path, JSON.stringify(products));
      
  }
  async #generateId() {
    const products = await this.getProducts();
    const id = products.length === 0 ? 1 : products[products.length - 1].id + 1;
    return id;
}
}


//    async function main() {
//      const manager = new ProductManager("./products.json");
//    let products = await manager.getProducts(); 
//    console.log(products);
//         await manager.addProduct("cafe","negro", 10,"Sin Imagen", "ggg777", 50);
//      console.log( await manager.getProducts());
//     await manager.addProduct("azucar","blanca", 10,"Sin Imagen", "zkz789", 10);
//      console.log( await manager.getProducts());   
//    }

//   main();

