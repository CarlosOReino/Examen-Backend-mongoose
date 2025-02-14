import { createUser } from "../models/mongo.model.js";



export async function createNewUser(req, res) { 
    const { email, password } = req.body;
    await createUser({ email, password });
    res.json({ message: 'Usuario creado' });
}

