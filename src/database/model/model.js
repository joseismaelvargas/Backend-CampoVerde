import mongoose, { Schema } from "mongoose"; 
const habitacionSchema=new Schema({
     opciones:{
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
        maxLength:200,
     },
       ImagenesHabitacion:{
         type:Array,
    

       },
      carasteristicas:{
         type:String,
         required:true,
         maxLength:50,
         minLength:10
      },
      fechasReservadas: [
         {
           fechaEntrada: { type:String, required: true },
       
         }
         
       ]
})

const Habitacion=mongoose.model("Habitacion",habitacionSchema)
export default Habitacion