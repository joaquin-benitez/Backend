import express from "express";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/../public"));

app.use("/", viewsRouter);

const httpServer = app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log("New client connected!");

  socket.on("message", (data) => {
    console.log(data);

    socket.emit("message", "Mensaje enviado desde el servidor!");
    // socket.broadcast.emit("message", "Mensaje broadcasteado!");
    // socketServer.emit("message", "Mensaje global!");
  });

  socket.on("input-changed", (data) => {
    console.log(data);
    socketServer.emit("input-changed", data);
  });

  // setInterval(() => {
  //   socket.emit("message", "Información actualizada");
  // }, 1000);
});
