import { Router } from "express";
import { crearHabitacion } from "../controllers/Habitaciones.js";
const router=Router();
router.route('/crear').post(crearHabitacion)

export default router 