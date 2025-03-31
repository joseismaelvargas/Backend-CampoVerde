import { Router } from "express";
import { crearHabitacion,borrarHabitacion, mostrarHAbitacion, editarHabitacion } from "../controllers/Habitaciones.js";
import { prueba } from "../controllers/Habitaciones.js";
const router=Router();
router.route('/crear').post(crearHabitacion).get(mostrarHAbitacion)
router.route('/crear/:id').delete(borrarHabitacion).put(editarHabitacion)
router.route('/').get(prueba)

export default router 