import mongoose from "mongoose";

const mongodb="mongodb+srv://i00934562:dsrwaig473OsZFEh@cluster0.z8aba.mongodb.net/bdhotel"

mongoose.connect(mongodb);

const infoConecion=mongoose.connection;

infoConecion.once('open',()=>{
    console.info('Base de dato Conectada')
})