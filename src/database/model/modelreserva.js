import mongoose, { Schema } from "mongoose"; 

const reservaSchema = new Schema({
    nombre: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 56
    },
    Dni: {
      type: Number,
   
      required: true
    },
    corre: {
      type: String,
      
     
    },
    entrada: {
        type:String,
      
      required:[true, 'La fecha de entrada obligatoria'],
     
    },
     
    salida: {
        type:String,
        required:[true, 'La fecha de salida es obligatoria'],
       
     
    },
    personas: {
      type: Number,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
  });
const Reservas=mongoose.model("Reservas",reservaSchema)

export default Reservas
