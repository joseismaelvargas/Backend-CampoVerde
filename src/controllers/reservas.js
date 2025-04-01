import reservas from "../database/model/model.js"
export const crearReservas=async (req,res)=>{
    try{
         const resservaEcha=await reservas(req.body);
         new resservaEcha.save()
         res.status(201).json({messaje:"La reserva fue echa con exito"})
    }catch(error){
     console.error(error)
    }

}
export const eliminarReserva=async (req,res)=>{
 try{
   const deleteReserva=await  reservas.findById(req.params.id)
    if(!deleteReserva){
        res.status(404).json({menssaje:"No se encontro la reserva"})
    }
 }catch(error){
    console.error(error)
 }
}