import mongoose from "mongoose";

export const dbConnection = async () => {
    mongoose.set('strictQuery', false);
    try {
        const conn = await mongoose.connect('mongodb+srv://brajhan:PJAe4mvbeafg98Bc@cluster0.deiefvn.mongodb.net/persona');

        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar BD')
    }

}
