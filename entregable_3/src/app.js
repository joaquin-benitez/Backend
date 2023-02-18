import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();

const manager = new ProductManager("./Products.json");



app.get("products", async (req, res) => {
    
    const products = await manager.getProducts();

    res.send(products)

});



app.get("/products/:id/", async (req, res) => {

    const products = await manager.getProducts();

    const {id}= req.params;
    
    const product = products.find((p) => p.id === id);

    if (!product) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }else res.send(product);

    
});



app.listen(8080, () => {
    console.log("server listening on port 8080")
});