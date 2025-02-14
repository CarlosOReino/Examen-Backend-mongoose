import {mongoose} from "mongoose";

export default function conn() {
    mongoose
    .connect("mongodb://127.0.0.1:27017/examendb", {})
    .then(() => {
      console.log("Conectado a MongoDB");
    })
    .catch((err) => {
      console.error("Error de conexión a MongoDB:", err);
    });
}