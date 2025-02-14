import express, {json} from 'express';
import conn from './database/mongodb.js';
import { createNewUser } from './controllers/user.controller.js';



const app = express();
app.use(json());
// Ruta para conectar a mongodb
app.get('/', conn);


// Ruta para crear un usuario en mongodb
app.post("/create-user", createNewUser);


app.listen(3000);

console.log('Server on port', 3000);