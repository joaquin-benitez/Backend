const fs = require("fs");

class ProductManager {
  #path;
  #acc = 0; 

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

  async addProduct(title, description, price, thumbnail, code, stock) {
   
    const products = await this.getProducts();

    const productToValidate = products.some((p) => p.code === code);

    if (productToValidate) {
      throw new Error(`Producto ya existente`);
        }
  
  
    if(!title || !description || !price || !thumbnail || !code || !stock){
        throw new Error(`Falta un elemento del Producto`);
    };
  
        
    const newProduct = {
        id: this.#acc,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };

    this.#acc++;

    

    const updatedProducts = [...products, newProduct];

    await fs.promises.writeFile(this.#path, JSON.stringify(updatedProducts));
  }
  
  async getProductById (id){

    const products = await this.getProducts();

     const idProductToValidate = products.find((p) => p.id === id);
      if (!idProductToValidate) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }else return idProductToValidate;
  }

  async updateProduct(id,dataToUpdate){
    
    dataToUpdate = {title, description, price, thumbnail, code, stock};
    
    const products = await this.getProducts();

    const updatedProducts = products.map((p) => p.id === id ? {...p, ...dataToUpdate} : p)


    await fs.promises.writeFile(this.#path, JSON.stringify(updatedProducts));


  }

  async deleteProduct(id) {

    const products = await this.getProducts();

    const deleteProducts = products.map((p) => p.id === id ? { } : p)
    
    await fs.promises.writeFile(this.#path, JSON.stringify(deleteProducts));

  }

}


async function main() {
    const manager = new ProductManager("./Products.json");
  
    let products = await manager.getProducts();
  
    console.log(products);
    
      // await manager.addProduct("arroz","arroz blanco", 40,"Sin Imagen", "zzz420", 50);
      // console.log( await manager.getProducts());

      // await manager.addProduct("cafe","negro", 10,"Sin Imagen", "ggg777", 50);
      // console.log( await manager.getProducts());

    
    await manager.getProductById(1);
    console.log(await manager.getProductById(1));

    await manager.updateProduct(1,(title="cafe", description="verde", price=15, thumbnail="none", code="ggg778", stock=50));
    console.log(products);

    await manager.deleteProduct(1);
    console.log(products);

}



main();