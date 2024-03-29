import { Router } from "express";
import { ProductManager } from "../controller/productsController.js";

const productsRouter = Router();
const productManager = new ProductManager("./src/db/products.json");

productsRouter.get("/", async (req, res) => {
    const products = await productManager.getProducts();
    const {limit} = req.query;  
    
    if (limit) {
        return res.send(products.slice(0,limit));
    };
     
    res.send(products);
});

productsRouter.get("/:pid/", async (req, res) => {

    const product = await productManager.getProductById(req.params.pid);
    res.json({ product });
        
});

productsRouter.post("/", async (req, res) => {
    const {title, description, price, thumbnails, code, stock}= req.body;
    
    const newProduct = await productManager.addProduct(title, description, price, thumbnails, code, stock);
    res.json({ message: "producto creado con éxito", newProduct });

});
  
productsRouter.put("/:pid", async (req, res) => {
    const id = req.params.pid;
    const dataToUpdate = req.body;
    console.log(id, dataToUpdate);
    
    try {
      const updatedProduct = await productManager.updateProduct(id, dataToUpdate);
      res.json({ message: "producto actualizado con éxito", updatedProduct });
    } catch (error) {
      return error;
    }
});
  
productsRouter.delete("/:pid", async (req, res) => {
    const id = req.params.pid;
    const deletedProduct = await productManager.deleteProduct(id);
    res.json({ message: "producto eliminado con éxito", deletedProduct });
});
  
  export default productsRouter;

