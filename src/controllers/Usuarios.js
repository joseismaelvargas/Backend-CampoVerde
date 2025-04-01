import Usuario from "../database/model/modelUser.js";

export const crearUsuario=async(req,res)=>{
    try{
        const usernew=new Usuario(req.body);
        await usernew.save();
        res.status(201).json({mensaje:"El Usuario  Fue Creado con exito"})
    }catch(error){
        console.error(error)
        console.error("Error al crear Usuario:", error.message);
        res.status(500).json({ mensaje: "Error interno", error: error.message });
    }
}