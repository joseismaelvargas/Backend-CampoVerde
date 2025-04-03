import mongoose, { Schema } from "mongoose"; 

const reservaSchema = new Schema({
    nombre: {
      type: String,
      required: [true, 'El nombre es requerido'],
      minlength: 3,
      maxlength: 56
    },
    Dni: {
      type: Number,
      unique: true,
      required: [true, 'el dni es requerido'],
    },
    corre: {
      type: String,
      
      unique: [true, 'El correo de usuario es requerido']
    },
    entrada: {
        type:String,
      required: [true, 'La fecha de entrada es requerida']
    },
     
    salida: {
        type:String,
      required: [true, 'La fecha de salida es requerida']
     
    },
    personas: {
      type: Number,
      required: [true, 'El número de personas es requerido']
    },
    tipo: {
      type: String,
      required: true
    },
  });
const Reservas=mongoose.model("Reservas",reservaSchema)

export default Reservas
