import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path';
import "./src/database/dbconetion.js"
// import "./src/database/dbusuarios.js"
import { fileURLToPath } from 'url';
import routerhabitacion from './src/routes/habitaciones.routes.js';



const app=express();

app.set('port',process.env.PORT||3000);

app.listen(app.get('port'),()=>{
    console.info("Se conecto el puerto "+app.get('port'))
});


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

app.use(express.static(path.join(__dirname,'/public')))


app.use('/api',routerhabitacion)