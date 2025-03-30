import { Router } from "express";
import { crearHabitacion } from "../controllers/Habitaciones.js";
const router=Router();
router.route('/habitaciones').post(crearHabitacion)

export default router 