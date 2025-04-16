import mongoose ,{Schema}from "mongoose";
import script from 'mongoose-bcrypt'
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
        bcrypt:true,
        min:3,
        max:1000000
    },
    correo:{
        type:String,
        required:true,

    }
})
usuariosSchema.plugin(script)
const Usuario=mongoose.model('Usuario',usuariosSchema)
export default Usuario