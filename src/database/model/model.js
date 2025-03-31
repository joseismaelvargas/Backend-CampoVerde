import mongoose, { Schema } from "mongoose"; 
const habitacionSchema=new Schema({
     tipo:{
        type:String,
        required:true,
  
        minLength:3,
        maxLength:1000,
        
     },
     precio:{
        type:Number,
        required:true,
        min:1,
        max:10000
     },
     info:{
      type:String,
      required:true,
      minLength:3,
        maxLength:3000,
     },
     imagen1: {
        type: String,
        required: true,
       maxLength:1000,
       minLength:10,
      },
      imagen2: {
        type: String,
        required: true,
        maxLength:1000,
       minLength:10,
      },
      imagen3: {
        type: String,
        required: true,
        maxLength:1000,
       minLength:10,
      },

})

const Habitacion=mongoose.model("Habitacion",habitacionSchema)
export default Habitacion