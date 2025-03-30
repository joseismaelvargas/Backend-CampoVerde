import { Router } from "express";
import { crearHabitacion } from "../controllers/Habitaciones.js";
import { prueba } from "../controllers/Habitaciones.js";
const router=Router();
router.route('/crear').post(crearHabitacion)
router.route('/').get(prueba)

export default router 