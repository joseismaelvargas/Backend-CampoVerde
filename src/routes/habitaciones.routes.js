import { Router } from "express";
import { crearHabitacion,borrarHabitacion, mostrarHAbitacion, editarHabitacion } from "../controllers/Habitaciones.js";
import { prueba } from "../controllers/Habitaciones.js";
const router=Router();
router.route('/crear').post(crearHabitacion).get(mostrarHAbitacion)
router.route('/editarHabitacion/:id').put(editarHabitacion)
router.route('/eliminarHabitacion/:id').delete(borrarHabitacion)
router.route('/').get(prueba)

export default router 