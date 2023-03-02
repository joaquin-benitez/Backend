import express from "express";
import productsRouter from "./routes/productsRouter.js";
import cartRouter from "./routes/cartRouter.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use('/api/carts', cartRouter);



app.listen(8080, () => {
  console.log("Server listening on port 8080");
});