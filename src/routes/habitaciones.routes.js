import { Router } from "express";
import { mostrarUsuario,borrarUsuario,editarUsuario,crearUsuario } from "../controllers/Usuarios.js";
import { crearHabitacion,borrarHabitacion, mostrarHAbitacion, editarHabitacion, reservarhabitacion} from "../controllers/Habitaciones.js";

import { prueba } from "../controllers/Habitaciones.js";
import { mostrarReserva,crearReservas, eliminarReserva, editarReserva } from "../controllers/reservas.js";

const router=Router();
router.route('/crear').post(crearHabitacion).get(mostrarHAbitacion)
router.route('/editarHabitacion/:id').put(editarHabitacion)
router.route('/eliminarHabitacion/:id').delete(borrarHabitacion)
router.route('/').get(prueba)
router.route('/reservarhabitacion/:id').post(reservarhabitacion)

router.route('/crearUsuario').post(crearUsuario)
router.route('/verusuarios').get(mostrarUsuario)
router.route('/eliminarUsuario/:id').delete(borrarUsuario)
router.route('/editarUsuario/:id').put(editarUsuario)


router.route('/verReservas').get(mostrarReserva)
router.route('/crearReserva').post(crearReservas)
router.route('/borrarReserva/:id').delete(eliminarReserva)
router.route('/editarReserva/:id').put(editarReserva)
export default router 