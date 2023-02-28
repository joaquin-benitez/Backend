import express from "express";
import productsRouter from "./routes/productsRouter.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);



app.listen(8080, () => {
  console.log("Server listening on port 8080");
});