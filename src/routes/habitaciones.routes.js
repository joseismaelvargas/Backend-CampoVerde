import { Router } from "express";
import { mostrarUsuario,borrarUsuario,editarUsuario } from "../controllers/Usuarios.js";
import { crearHabitacion,borrarHabitacion, mostrarHAbitacion, editarHabitacion} from "../controllers/Habitaciones.js";
import { crearUsuario } from "../controllers/Usuarios.js";
import { prueba } from "../controllers/Habitaciones.js";

const router=Router();
router.route('/crear').post(crearHabitacion).get(mostrarHAbitacion)
router.route('/editarHabitacion/:id').put(editarHabitacion)
router.route('/eliminarHabitacion/:id').delete(borrarHabitacion)
router.route('/').get(prueba)

router.route('/crearUsuario').post(crearUsuario)
router.route('/verusuarios').get(mostrarUsuario)
router.route('/eliminarUsuario/:id').delete(borrarUsuario)
router.route('/editarUsuario/:id').put(editarUsuario)
export default router 