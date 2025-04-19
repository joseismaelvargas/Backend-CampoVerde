

// import bcrypt from 'bcrypt';
import Usuarios from '../database/model/modelUser.js'
// export const logearUsuario = async (req, res) => {

//     const { correo, contraseña } = req.body;
   
  
//     try {
//       const usuario = await Usuarios.findOne({ correo});
 
//       if (!usuario) {
//         return res.status(404).json({ mensaje: "usuario no encontrado" });
//       }
  
//       const passwordValida = await bcrypt.compare(contraseña, usuario.contraseña);
  
//       if (!passwordValida) {
//         return res.status(401).json({ mensaje: "Contraseña incorrecta" });
//       }
  
//       res.status(200).json({ mensaje: "Login exitoso", rol: usuario.rol });
//     } catch (error) {
//       console.error("Error al logear:", error);
//       res.status(500).json({ mensaje: "Error interno del servidor" });
//     }
//   };

export const crearUsuario=async(req,res)=>{
    try{
        const usuarionew=new Usuarios(req.body);
        await usuarionew.save();
        res.status(201).json({mensaje:"El usuario Fue Creado con exito"})
    }catch(error){
        console.error(error)
        console.error("Error al crear al usuario:", error.message);
        res.status(500).json({ mensaje: "Error interno", error: error.message });
    }
}
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
        await Usuarios.findByIdAndDelete(req.params.id)
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
           await Usuarios.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json({mensaje:"El edit ocurrio con exito"})

    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al editar"})
    }
}