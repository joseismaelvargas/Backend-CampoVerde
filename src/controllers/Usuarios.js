import Usuarios from '../database/model/model.js'

export const mostrarUsuario=async(req,res)=>{
    try{
        const usuario=await Usuarios.find()
        res.status(200).json(usuario)


    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al mostrar los usuarios"})
    }
}

export const borrarUsuario=async(req,res)=>{
    try{
        const borrar=await Usuarios.findById(req.params.id)
        if(!borrar){
            return res.status(404).json({mensaje:"No se econtro al usuario"})

        }
        await Habitacion.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:"El delete ocurrio con exito"})

    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al querer borrar"})
    }
}
export const editarUsuario=async(req,res)=>{
    try{
           const usuario=await Usuarios.findById(req.params.id)
           if (!usuario) {
            return res
              .status(404)
              .json({ mensaje: " El usuario olicitado no existe" });
          }
           await Habitacion.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json({mensaje:"El edit ocurrio con exito"})

    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al editar"})
    }
}