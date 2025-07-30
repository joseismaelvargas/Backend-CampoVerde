import multer from "multer";
import path from "path";
import fs from "node:fs/promises"

const uploads=multer({dest:"uploads/"})

export const saveImage=async (req,res)=>{
    // const nameUnique=`${file.originalname}`;
    // const newPath=path.join('uploads',nameUnique)
    try{
    const resultados = [];

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ mensaje: "No se subieron archivos" });
    }

    for (const file of req.files) {
      const nameUnique = `${Date.now()}-${file.originalname}`;
      const newPath = path.join('uploads', nameUnique);

      await fs.rename(file.path, newPath);
      console.log('Imagen guardada en:', newPath);

      resultados.push(nameUnique);
    }
    res.status(200).json({ mensaje: "Imágenes guardadas", archivos: resultados });
   
    return nameUnique
    }catch(error){
        console.error("Error al guardar Imagen",error)
        return null
    }

}
export const subirImagenes=uploads.array('ImageHabitaciones')