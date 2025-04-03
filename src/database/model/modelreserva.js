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
      unique: true,
      required: true
    },
    corre: {
      type: String,
      
      unique:true
    },
    entrada: {
        type:String,
      
      required:[true, 'La fecha de entrada obligatoria'],
      match: [
        /^\d{1,2}\/\d{1,2}\/\d{4}$/,
        'La fecha debe estar en el formato "dd/mm/yyyy a dd/mm/yyyy"',
      ],
    },
     
    salida: {
        type:String,
        required:[true, 'La fecha de salida es obligatoria'],
        match: [
          /^\d{1,2}\/\d{1,2}\/\d{4}$/,
          'La fecha debe estar en el formato "dd/mm/yyyy a dd/mm/yyyy"',
        ],
     
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
