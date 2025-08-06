import multer from "multer";
import path from "path";
import fs from "node:fs/promises"

const uploads=multer({dest:"uploads/"})


export async function saveImage(file) {
  try {
    const nameUnique = `${Date.now()}-${file.originalname}`;
    const newPath = path.join('uploads', nameUnique);
    await fs.rename(file.path, newPath);
    console.log('Imagen guardada en:', newPath);
    return nameUnique;
  } catch (error) {
    console.error("Error al guardar imagen:", error);
    return null;
  }
}

export const subirImagenes=uploads.array('ImagenesHabitacion')
