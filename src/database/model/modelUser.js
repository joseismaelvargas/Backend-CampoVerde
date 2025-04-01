import mongoose ,{Schema}from "mongoose";
const usuariosSchema=new Schema({
    user:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true,
        minLength:2,
        maxLength:40
    },
    contraseña:{
        type:String,
        required:true,
        min:3,
        max:1000000
    },
    correo:{
        type:String,
        required:true,

    }
})
const Usuario=mongoose.model('Usuario',usuariosSchema)
export default Usuario