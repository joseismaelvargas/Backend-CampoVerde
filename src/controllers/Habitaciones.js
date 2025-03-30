import HAbitacion from "../database/model/model.js"

export const prueba = (req, res) => {
    res.status(200).json({ mensaje: "Funciona correctamente" });
  };
//CREAR
export const crearHabitacion=async(req,res)=>{
    try{
        const habitacionNueva=new HAbitacion(req.body);
        await habitacionNueva.save();
        res.status(201).json({mensaje:"La  habitacion Fue Creada con exito"})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje:"Ocurrio un error , no se pudo crear la habitacion"})
    }
}