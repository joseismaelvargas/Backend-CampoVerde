import Habitacion from "../database/model/model.js"
import { saveImage } from "./multer.js";
export const prueba = (req, res) => {
    res.status(200).json({ mensaje: "Funciona correctamente" });
  };
//CREAR
export const crearHabitacion=async(req,res)=>{

    try{
        let Imagenes=null
    if(req.file){
      Imagenes=await saveImage(req.file)
    }
    console.log(Imagenes)
        const habitacionNueva=new Habitacion(req.body);
        await habitacionNueva.save();
        res.status(201).json({mensaje:"La  habitacion Fue Creada con exito"})
    }catch(error){
        console.error(error)
        console.error("Error al crear habitación:", error.message);
        res.status(500).json({ mensaje: "Error interno", error: error.message });
    }
}
// Borrrar

export const mostrarHAbitacion=async(req,res)=>{
    try{
        const habitaciones=await Habitacion.find()
        res.status(200).json(habitaciones)


    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al mostrar las habitaciones"})
    }
}
export const borrarHabitacion=async(req,res)=>{
    try{
        const borrar=await Habitacion.findById(req.params.id)
        if(!borrar){
            return res.status(404).json({mensaje:"No se econtro la habitacion"})

        }
        await Habitacion.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:"El delete ocurrio con exito"})

    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al querer borrar"})
    }
}
export const editarHabitacion=async(req,res)=>{
    try{
           const habitacionBuscada=await Habitacion.findById(req.params.id)
           if (!habitacionBuscada) {
            return res
              .status(404)
              .json({ mensaje: "La habitacion solicitada no existe" });
          }
           await Habitacion.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json({mensaje:"El edit ocurrio con exito"})

    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al editar"})
    }
}


export const reservarhabitacion = async (req, res) => {
    try {
      const habitacionBuscada = await Habitacion.findById(req.params.id);
  
      if (!habitacionBuscada) {
        return res.status(404).json({ mensaje: "Habitación no encontrada" });
      }
  
      const { fechaEntrada, fechaSalida } = req.body;
  
      const nuevaReserva = {
        fechaEntrada,
        fechaSalida,
      };
  
      await Habitacion.updateOne(
        { _id: habitacionBuscada._id },
        {
          $push: {
            fechasReservadas: nuevaReserva,
          },
        }
      );
  
      return res.status(200).json({ mensaje: "Reserva agregada correctamente" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ mensaje: "Ocurrió un error en el Backend" });
    }}