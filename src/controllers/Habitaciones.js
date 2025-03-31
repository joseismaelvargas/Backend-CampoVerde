import Habitacion from "../database/model/model.js"

export const prueba = (req, res) => {
    res.status(200).json({ mensaje: "Funciona correctamente" });
  };
//CREAR
export const crearHabitacion=async(req,res)=>{
    try{
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
        await HAbitacion.findByIdAndDelete(req.params.id)
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
           await HAbitacion.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json({mensaje:"El edit ocurrio con exito"})

    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al editar"})
    }
}