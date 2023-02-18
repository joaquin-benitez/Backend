import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();

const manager = new ProductManager("./Products.json");



app.get("products", (req, res) => {

});



app.get("/products/:id/", async (req, res) => {

    const products = await manager.getProducts();

    const {id}= req.params;
    
    const product = products.find((p) => p.id === parseInt(id));

    res.send(product);
});



app.listen(8080, () => {
    console.log("server listening on port 8080")
});