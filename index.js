import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';


//1.Configurar Puerto

const app=express();

app.set('port',process.env.PORT||4000);

app.listen(app.get('port'),()=>{
    console.info("Se conecto el puerto "+app.get('port'))
});
// 2-Configurar middleware

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public')))



app.get('/prueba',(req,res)=>{
    console.log('Alguien hiso una solicitud GET')
    res.send('Hola mundo desde el Backend xd xd')
})