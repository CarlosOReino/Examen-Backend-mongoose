import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Create
export async function createUser(userData) {
    try {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      console.log('Usuario creado:', savedUser);
      return savedUser;
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  }
