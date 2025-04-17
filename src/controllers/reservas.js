import Reservas from '../database/model/modelreserva.js'


export const crearReservas=async (req,res)=>{
    try{
        const { nombre, Dni, corre, entrada, salida, personas, tipo,pago } = req.body;

      
        const reservaEcha = new Reservas({
          nombre,
          Dni,
          corre,
          entrada,
          salida,
          personas,
          tipo,
          pago
        });
     
         await reservaEcha.save()
         res.status(201).json({messaje:"La reserva fue echa con exito"})
    }catch(error){
     console.error(error)
     return res.status(500).json({ error: 'Hubo un error al crear la reserva', details: error.message });
    }

}

export const mostrarReserva=async(req,res)=>{
    try{
        const usuario=await Reservas.find()
        res.status(200).json(usuario)


    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al mostrar las Reservas"})
    }
}

export const editarReserva=async(req,res)=>{
    try{
           const reserva=await Reservas.findById(req.params.id)
           if (!reserva) {
            return res
              .status(404)
              .json({ mensaje: " La reserva solicitado no existe" });
          }
           await Reservas.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json({mensaje:"El edit ocurrio con exito"})

    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:"Ocurrio un error al editar"})
    }
}

export const eliminarReserva=async (req,res)=>{
 try{
   const deleteReserva=await Reservas.findById(req.params.id)
    if(!deleteReserva){
        res.status(404).json({menssaje:"No se encontro la reserva"})
    }
    await Reservas.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:"El delete ocurrio con exito"})
 }catch(error){
   res.status(500).json({mensaje:"ocurrio un error"})
 }
}